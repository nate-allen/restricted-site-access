function add_ip(e){var t=600;if(restricted_site_access_l10n.wp_version<3.5)t=60;if(jQuery.trim(e)=="")return false;add_btn.attr("disabled","disabled");var n=jQuery("#ip_list input");for(var r=0,i=n.length;r<n.length;r++){if(n[r].value==e){jQuery(n[r]).parent().effect("shake",t);add_btn.removeAttr("disabled");return false}}jQuery.post(ajaxurl,{action:"rsa_ip_check",ip_address:e},function(n){if(n){jQuery("#newip").parent().effect("shake",t);add_btn.removeAttr("disabled");return false}else{jQuery('<div style="display: none;"><input type="text" name="rsa_options[allowed][]" value="'+e+'" readonly="true" /> <a href="#remove" onclick="remove_ip(this);">'+restricted_site_access_l10n.Remove+"</a></div>").appendTo("#ip_list").slideDown(250);if(e==jQuery("#newip").val())jQuery("#newip").val("");jQuery("#addip").removeAttr("disabled");return true}})}function remove_ip(e){jQuery(e).parent().slideUp(250,function(){jQuery(this).remove()})}var add_btn;jQuery(document).ready(function(e){add_btn=e("#addip");var t=e("#rsa-send-to-login").closest("table");var n=e(".rsa_redirect_field").closest("tr");var r=e("#rsa_message").closest("tr");var i=e("#rsa_page").closest("tr");if(!e("#blog-restricted").is(":checked"))t.hide();if(!e("#rsa-redirect-visitor").is(":checked"))n.hide();if(!e("#rsa-display-message").is(":checked"))r.hide();if(!e("#rsa-unblocked-page").is(":checked"))i.hide();e('input[name="rsa_options[approach]"]').change(function(){if(e("#rsa-redirect-visitor").is(":checked"))n.show();else n.hide();if(e("#rsa-display-message").is(":checked"))r.show();else r.hide();if(e("#rsa-unblocked-page").is(":checked"))i.show();else i.hide()});e('input[name="blog_public"]').change(function(){if(e("#blog-restricted").is(":checked"))t.show();else t.hide()})})