<template>
  <!--  TODO: Make sure mailinglist works-->
  <div>
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          id="mc-embedded-subscribe-form"
          action="https://on-point.us5.list-manage.com/subscribe/post?u=01d6de19e17593ce2f49c0c05&amp;id=e19324ec26&amp;f_id=00d678ebf0"
          method="post"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="flex items-end">
              <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input
                id="mce-EMAIL"
                type="email"
                name="EMAIL"
                class="required h-10 email flex-grow w-full bg-white border border-black py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-black focus:placeholder-gray-400"
                required=""
                value="">
                <span
                  id="mce-EMAIL-HELPERTEXT"
                  class="helper_text"/>
              </div>
              <input
                id="mc-embedded-subscribe"
                type="submit"
                name="subscribe"
                class="h-10 flex justify-center items-center button button bg-black text-white px-2"
                value="Subscribe">
            </div>
            <div
              id="mce-responses"
              class="clear foot">
              <div
                id="mce-error-response"
                class="response"
                style="display: none;"/>

              <div
                id="mce-success-response"
                class="response"
                style="display: none;" />
            </div>
            <div
              aria-hidden="true"
              style="position: absolute; left: -5000px;">
              /* real people should not fill this in and expect good things - do not remove this or risk form bot signups
              */
              <input
                type="text"
                name="b_01d6de19e17593ce2f49c0c05_e19324ec26"
                tabindex="-1"
                value="">
            </div>

          </div>
        </form>
      </div>

    </div>
  </div>
</template>
<script setup>
useHead({
  script: [
    { async: true,
      src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    },
    { children: '(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[3]=\'MMERGE3\';ftypes[3]=\'text\';fnames[4]=\'MMERGE4\';ftypes[4]=\'text\';fnames[5]=\'MMERGE5\';ftypes[5]=\'text\';fnames[6]=\'MMERGE6\';ftypes[6]=\'text\';}(jQuery));var $mcj = jQuery.noConflict(true);' }
  ]
})
</script>