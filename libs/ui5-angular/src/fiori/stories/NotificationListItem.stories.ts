import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { NotificationListItemDirective } from '../directives/notification-list-item';

export default {
  component: NotificationListItemDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const notificationListItem: Story = (args) => ({
  props: args,
  template: `
        <ui5-list id="myList" class="full-width" header-text="Notifications">
			<ui5-li-notification show-close="" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/woman_avatar_1.png">
				</ui5-avatar>

				<span slot="footnotes">Monique Legrand</span>
				<span slot="footnotes">2 Days</span>
			</ui5-li-notification>

			<ui5-li-notification show-close="" title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/man_avatar_1.png">
				</ui5-avatar>
				<span slot="footnotes">Alain Chevalier</span>
				<span slot="footnotes">2 Days</span>
			</ui5-li-notification>

			<ui5-li-notification show-close="" priority="High" title-text="New order (#2525) With a short title">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/man_avatar_2.png">
				</ui5-avatar>

				<span slot="footnotes">John Doe</span>
				<span slot="footnotes">2 Days</span>
			</ui5-li-notification>
		</ui5-list>
      `,
});

export const notificationListItemCustomActions: Story = (args) => ({
  props: args,
  template: `
        <ui5-list id="myList3" class="full-width" header-text="Notifications">
			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/woman_avatar_1.png">
				</ui5-avatar>
				<span slot="footnotes">Monique Legrand</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
				<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
			</ui5-li-notification>

			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/man_avatar_1.png">
				</ui5-avatar>
				<span slot="footnotes">Alain Chevalier</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
			</ui5-li-notification>

			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2525) With a short title">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/man_avatar_2.png">
				</ui5-avatar>
				<span slot="footnotes">John Doe</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
			<ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
			</ui5-li-notification>
		</ui5-list>
      `,
});

export const notificationListItemInShellBar: Story = (args) => ({
  props: args,
  template: `
        <ui5-shellbar id="shellbar" primary-title="Corporate Portal" logo="../../../assets/images/sap-logo-svg.svg" show-notifications="" notifications-count="4">
		</ui5-shellbar>

		<ui5-popover id="notificationsPopover" style="max-width: 400px" placement-type="Bottom" horizontal-align="Right">
			<ui5-list id="notificationListTop" header-text="Notifications">
				<ui5-li-notification show-close="" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar initials="JD" size="XS" slot="avatar"></ui5-avatar>
					<span slot="footnotes">John Doe</span>
					<span slot="footnotes">2 Days</span>

					<ui5-notification-action id="acceptBtnInPopover" icon="accept" text="Accept" slot="actions"></ui5-notification-action>
					<ui5-notification-action id="rejectBtnInPopover" icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
				</ui5-li-notification>
		
				<ui5-li-notification show-close="" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
		
					<span slot="footnotes">Office Notifications</span>
					<span slot="footnotes">3 Days</span>
		
					<ui5-notification-action id="acceptBtn2InPopover" icon="accept" text="Accept" slot="actions"></ui5-notification-action>
				</ui5-li-notification>
		
				<ui5-li-notification title-text="New order (#2565) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
						Short description
					<ui5-avatar initials="JS" size="XS" slot="avatar"></ui5-avatar>
		
					<span slot="footnotes">Patricia Clarck</span>
					<span slot="footnotes">3 Days</span>
		
					<ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
					<ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
				</ui5-li-notification>
		
				<ui5-li-notification title-text="New order (#2523)">
					<div>. With a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.</div>
		
					<span slot="footnotes">John SMith</span>
					<span slot="footnotes">3 Days</span>
		
					<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
				</ui5-li-notification>
			</ui5-list>
		</ui5-popover>
      `,
});