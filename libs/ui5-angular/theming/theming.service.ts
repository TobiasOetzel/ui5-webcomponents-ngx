import {Ui5ThemingProvider, Ui5ThemingService} from "@ui5/theming-ngx";
import {Injectable, OnDestroy, Optional} from "@angular/core";
import {BehaviorSubject, from, map, Observable, of, switchMap, tap} from "rxjs";
import supportedThemes from "./supported-themes";
import {registerThemePropertiesLoader} from '@ui5/webcomponents-base/dist/asset-registries/Themes'
import {setTheme} from '@ui5/webcomponents-base/dist/config/Theme'

/**
 * Theming service specifically for the ui5/webcomponents-ngx components.
 */
@Injectable({
  providedIn: 'root'
})
export class Ui5WebcomponentsThemingService implements Ui5ThemingProvider, OnDestroy {
  name = 'ui5-webcomponents-theming-service';

  private availableThemes$ = new BehaviorSubject<string[]>(supportedThemes);

  private themeSetters = new Map<string, () => Observable<boolean>>(this.availableThemes$.value.map((themeName) => {
    return [themeName, () => {
      registerThemePropertiesLoader(
        '@ui5/webcomponents-theming',
        themeName,
        this.loadTheme as any
      );
      setTheme(themeName);
      return of(true);
    }];
  }));

  /** @hidden */
  constructor(
    @Optional() private readonly _globalThemingService: Ui5ThemingService
  ) {
    this._globalThemingService?.registerProvider(this);
  }

  /** @hidden */
  ngOnDestroy(): void {
    this._globalThemingService?.unregisterProvider(this);
  }

  supportsTheme(theme: string): Observable<boolean> {
    return this.getAvailableThemes().pipe(
      map((themes) => themes.includes(theme))
    );
  }

  getAvailableThemes(): Observable<string[]> {
    return this.availableThemes$.asObservable();
  }

  setTheme(theme: string): Observable<boolean> {
    const setter = this.themeSetters.get(theme);
    if (setter) {
      return setter();
    }
    return of(false);
  }

  registerTheme(params: { theme: string, setTheme: () => Observable<{ packageName: string, fileName: string, content: string }> }): void {
    if (this.themeSetters.has(params.theme)) {
      throw new Error(`Theme \${params.theme} is already registered.`);
    }
    this.themeSetters.set(params.theme, () =>
      params.setTheme().pipe(
        tap((r) => {
          registerThemePropertiesLoader(r.packageName, params.theme, () =>
            Promise.resolve(r)
          );
        }),
        switchMap(() => from(setTheme(params.theme))),
        map(() => true)
      )
    );
    this.availableThemes$.next([...this.themeSetters.keys()]);
  }

  private loadTheme(theme: string): Promise<any> {
    return import(
      `@ui5/webcomponents-theming/dist/generated/assets/themes/${theme}/parameters-bundle.css.json`
      ).then((module) => {
      return module.default;
    });
  }
}