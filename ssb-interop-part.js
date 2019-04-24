
document.addEventListener('DOMContentLoaded', function() {

    let tt__customCss = `
body, .channel_header, #footer, .channel_title_info, #channel_topic_text, .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider { background: #1d1d1d; }
.c-message__body { color: #c2c2c2; }
.c-message_list__unread_divider__label, .p-message_pane__unread_banner__banner, .c-mrkdwn__member--mention { background: rgb(177, 202, 17) !important; }
.p-message_pane__unread_banner__banner { color: #111; text-shadow: none; }
.c-message_list__unread_divider__separator { border-color: rgb(177, 202, 17); }
#team_menu, .p-channel_sidebar { background: #393939 !important; }
.c-presence--active { color: #95e96f !important; }
nav.p-channel_sidebar .p-channel_sidebar__channel--selected, .p-channel_sidebar__link--selected, .c-message_list__day_divider__label__pill, .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider:before { color: #1a1a1a !important; background: #da8200 !important; }
.c-mrkdwn__member--link { background: #2f2f2f; color: #1a1a1a !important; }
.c-mrkdwn__broadcast.c-mrkdwn__broadcast--link.c-mrkdwn__broadcast--mention { color: #111 !important;  }
.c-message_list__day_divider__line { border-top-color: #da8200 !important; }
.c-message.c-message--light.c-message--hover { background-color: #2a2a2a !important; }
a, a:link, a:visited { color: #0483ce; }
.c-member_slug--link, .c-member_slug--mention { background: #fff6d1 !important; border: 0 !important; padding: 1px 5px !important; opacity: 0.85; }
#msg_input, #primary_file_button { background: #2f2f2f !important; }
#msg_form #msg_input { border-color: transparent; }
#msg_input.texty_legacy .ql-placeholder { color: #fff; opacity: 0.5; }
a.c-message__sender_link { color: #8ab5ca !important; }
.c-message__edited_label { font-size: 12px; color: #939393; }
a.p-channel_sidebar__channel.p-channel_sidebar__channel--private.p-channel_sidebar__channel--selected:before, a.p-channel_sidebar__channel.p-channel_sidebar__channel--selected:before { color: #1a1a1a !important; }
.c-reaction_add { border: 0; }
code { background-color: #cacaca; color: #d72b3f; border: 0; border-radius: 1px; padding: 5px 2px 1px 2px; margin: 0 2px; }
    `;
    $.ajax({
        url: 'https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css',
        success: function(css) {
            $('<style></style>').appendTo('head').html(css + tt__customCss);
        }
    });
});