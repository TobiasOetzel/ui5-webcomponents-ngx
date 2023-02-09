import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { FlexibleColumnLayoutDirective } from '../directives/flexible-column-layout';

export default {
  component: FlexibleColumnLayoutDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const flexibleColumnLayoutOneInitialColumn: Story = (args) => ({
  props: args,
  template: `
        <ui5-flexible-column-layout id="fcl" style="height: 600px;">

			<!-- start column -->
			<div class="col" slot="startColumn">
				<ui5-shellbar primary-title="Smart Store, New Yorks" notifications-count="4" show-notifications="" show-product-switch="" show-co-pilot="">
					<img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" slot="logo">
					<ui5-shellbar-item icon="disconnected" text="Disconnect"></ui5-shellbar-item>
					<ui5-shellbar-item icon="incoming-call" text="Incoming Calls"></ui5-shellbar-item>
				</ui5-shellbar>

				<br><br>
				<ui5-list id="col1list" header-text="Products (13)" mode="SingleSelect">
					<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
					<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
					<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end="" additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
					<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end="" additional-text="647.00 EUR">Astro Phone 6</ui5-li>
					<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end="" additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
					<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end="" additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
					<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end="" additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
					<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end="" additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
					<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
					<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end="" additional-text="1,288.00 EUR">Camcorder View</ui5-li>
					<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
					<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end="" additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
					<ui5-li description="HT-1001" icon="slim-arrow-right" icon-end="" additional-text="87.90 EUR">Gladiator MX</ui5-li>
				</ui5-list>
			</div>

			<!-- mid column -->
			<div class="col" slot="midColumn">
				<div class="colHeader">
					<ui5-title id="col2title" level="H2" style="min-width: 1px;"></ui5-title>

					<div class="colSubHeader">
						<ui5-button design="Emphasized">Edit</ui5-button>
						<ui5-button design="Transparent" icon="add"></ui5-button>
						<ui5-button id="fullscreenMidColumn" design="Transparent" icon="full-screen"></ui5-button>
						<ui5-button id="closeMidColumn" icon="decline" design="Transparent"></ui5-button>
					</div>
				</div>
				<br>

				<section style="padding: 1rem 1rem;">
					<ui5-title level="H3">General Information</ui5-title>
					<br>

					<div style="display:flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap">
						<div style="display:flex; flex-direction: row; align-items: center;">
							<ui5-avatar id="avatar" icon="laptop" color-scheme="Accent5" size="XL" style="margin: 0 1rem; min-width: 7rem;">
							</ui5-avatar>

							<div>
								<div class="productInfo">
									<ui5-title level="H5">Product:</ui5-title>
									<ui5-title level="H5" id="lblName"></ui5-title>
								</div>
								<br>

								<div class="productInfo">
									<ui5-title level="H5">Description:</ui5-title>
									<ui5-title level="H5" id="lblDesc"></ui5-title>
								</div>
								<br>

								<div class="productInfo">
									<ui5-title level="H5">Supplier:</ui5-title>
									<ui5-title level="H5" id="lblSupplier"><b>Titanium</b></ui5-title>
								</div>
							</div>
						</div>

						<div class="productInfo" style="align-self: start">
							<ui5-title level="H5">Rating:</ui5-title>
							<ui5-rating-indicator id="productRating" accessible-name="Hello World" value="3.5"></ui5-rating-indicator>
						</div>

						<span></span>
					</div>

					<br><br><br>

					<ui5-title level="H3">Suppliers</ui5-title>
					<br>
					<ui5-list id="col2list">
						<ui5-li icon="slim-arrow-right" icon-end="">Titanium</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Technocom</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end=""> Red Point Stores</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end=""> Very Best Screens</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Smartcards</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Alpha Printers</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Printer for All</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Oxynum</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Fasttech</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Ultrasonic United</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Speaker Experts</ui5-li>
						<ui5-li icon="slim-arrow-right" icon-end="">Brainsoft</ui5-li>
					</ui5-list>
				</section>
			</div>

			<!-- end column -->
			<div class="col" slot="endColumn">
				<div class="colHeader">
					<ui5-title id="col3title" style="min-width: 1px;"></ui5-title>

					<div class="colSubHeader">
						<ui5-button design="Emphasized">Edit</ui5-button>
						<ui5-button design="Transparent" icon="add"></ui5-button>
						<ui5-button id="fullscreenEndColumn" design="Transparent" icon="full-screen"></ui5-button>
						<ui5-button id="closeEndColumn" icon="decline" design="Transparent"></ui5-button>
					</div>
				</div>
				<br><br>

				<ui5-tabcontainer id="tabContainer1" fixed="" collapsed="">
					<ui5-tab text="Products" additional-text="125">
					</ui5-tab>
					<ui5-tab-separator></ui5-tab-separator>
					<ui5-tab icon="sap-icon://menu2" text="Laptops" design="Positive" additional-text="25">
					</ui5-tab>
					<ui5-tab icon="sap-icon://menu" text="Monitors" selected="" design="Critical" additional-text="45">
					</ui5-tab>
					<ui5-tab icon="sap-icon://menu2" text="Keyboards" design="Negative" additional-text="15">
					</ui5-tab>
					<ui5-tab icon="sap-icon://menu2" disabled="" text="Disabled" design="Negative" additional-text="40">
					</ui5-tab>
					<ui5-tab icon="sap-icon://menu2" text="Neutral" design="Neutral" additional-text="40">
					</ui5-tab>
					<ui5-tab icon="sap-icon://menu2" text="Default" additional-text="40">
					</ui5-tab>
				</ui5-tabcontainer>

				<section style="padding: 1rem 1rem; background: var(--sapList_Background);">
					<p>
						<ui5-title level="H5" wrapping-type="Normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
						</ui5-title>
					</p>
					<p>
						<ui5-title level="H5" wrapping-type="Normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
						</ui5-title>
					</p>
					<p>
						<ui5-title level="H5" wrapping-type="Normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
						</ui5-title>
					</p>
				</section>
			</div>
		</ui5-flexible-column-layout>
      `,
});
