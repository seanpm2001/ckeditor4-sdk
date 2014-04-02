Ext.data.JsonP.dev_uicolor({"guide":"<h1 id='dev_uicolor-section-adjusting-editor-ui-color'>Adjusting Editor UI Color</h1>\n\n<p>The editor UI color can be easily adjusted by the developer to match the look and feel of a website or an application where CKEditor is embedded in.</p>\n\n<p class=\"tip\">\n    Please note that this feature can only be used for editor skins that are compatible with the so-called <a href=\"#!/guide/skin_sdk_chameleon\">\"chameleon\" feature</a>. The skins created by CKSource, i.e. <a href=\"http://ckeditor.com/addon/moono\">Moono</a> and <a href=\"http://ckeditor.com/addon/kama\">Kama</a>, already support it. If you are using a custom skin, you will need to define the <code><a href=\"#!/api/CKEDITOR.skin-method-chameleon\">CKEDITOR.skin.chameleon</a></code> function in your <code>skin.js</code> file.\n</p>\n\n\n<p>If you want to change the default UI color, you need to define the <a href=\"#!/api/CKEDITOR.config-cfg-uiColor\">config.uiColor</a> configuration setting. This option accepts an RGB color code or one of the 140 color names as defined in the HTML and CSS color specification.</p>\n\n<p>For example, to change the CKEditor UI to the joyful green color that would match this site's header, you could set the following <a href=\"#!/guide/dev_configuration\">editor configuration</a>:</p>\n\n<pre><code>config.uiColor = #66AB16;\n</code></pre>\n\n<p>This will cause the editor UI to assume the provided color, as visible below. See also the <a href=\"samples/uicolor.html\">working UI Color sample</a> along with its source code, ready to copy and implement with your own CKEditor instance!</p>\n\n<p><p><img src=\"guides/dev_uicolor/uicolor_01.png\" alt=\"\" width=\"923\" height=\"311\"></p></p>\n\n<h2 id='dev_uicolor-section-ui-color-picker'>UI Color Picker</h2>\n\n<p>Adjusting the UI color can be even easier than that. To make use of the second method, your CKEditor build needs to include the optional <a href=\"http://ckeditor.com/addon/uicolor\">UI Color Picker</a> plugin.</p>\n\n<p>When the plugin is enabled, it adds a new <strong>UI Color Picker</strong> button (<img src=\"guides/dev_uicolor/uicolor.png\">) to your toolbar. Clicking this button opens the <strong>UI Color Picker</strong> dialog window where you have a few options to find the right color.</p>\n\n<p><p><img src=\"guides/dev_uicolor/uicolor_02.png\" alt=\"\" width=\"386\" height=\"415\"></p></p>\n\n<p>For a start, you can click anywhere in the color palette to select a color. You can also choose from one of the pre-defined color sets and fine-tune as you see fit. Last but not least you can simply manually enter an RGB color code or the RGB and HSV values in appropriate fields.</p>\n\n<p>A nice feature of this tool is that it offers instant preview of the selected color, so testing your changes is really quick.</p>\n\n<p>When you are satisfied with your choice, you can copy the working UI color configuration code displayed at the bottom of the dialog window and use it in your editor configuration as described above.</p>\n\n<p><p><img src=\"guides/dev_uicolor/uicolor_03.png\" alt=\"\" width=\"386\" height=\"415\"></p></p>\n\n<p>See also the <a href=\"samples/uicolorpicker.html\">working UI Color Picker sample</a> along with its source code, ready to copy and implement with your own CKEditor instance!</p>\n\n<p>Although this feature is mainly useful for developers who are working on their CKEditor customizations, if you leave it enabled in your production environment, your end-users will be able to adjust the editor interface color to their liking. This change will only last until the end of their visit, though, and on reloading the page they will be greeted with default editor colors again.</p>\n","title":"UI Color","meta_description":"Adjusting CKEditor UI Color.","meta_keywords":"ckeditor, editor, wysiwyg, color, colour, ui, interface, skin, configure, configuration, setup, settings, options, customization, customize, customise, customisation, config, modification, modify, change"});