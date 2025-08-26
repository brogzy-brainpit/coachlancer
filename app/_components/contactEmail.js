export function contactemail(email,name,message){
   return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

  <head data-id="__react-email-head">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if gte mso 9]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abel&family=Madimi+One&display=swap" rel="stylesheet"> <link href="https://fonts.cdnfonts.com/css/galano-grotesque-alt" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <!--<![endif]-->
    <title>Email Template</title>
    <!--[if gte mso 9]>
    <style type="text/css" media="all">
    sup { font-size: 100% !important; }
    </style>
    <![endif]-->



    <style type="text/css" media="screen">
    /* Linked Styles */
    ::-webkit-scrollbar{
    width: 5px;
    height: 5px;
    }

    ::-webkit-scrollbar-track{
    background-color: white;
    background-color: transparent;
    }
    ::-webkit-scrollbar-thumb{
    background-color: #2299F8;
    border-radius: 0px;
    border-radius: 4px;

    }

    ::-webkit-scrollbar-thumb:hover{
    background-color: #0788f1;
    background-color: #36c28c;
    border-radius: 4px;
    }

    a { color:#000001; text-decoration:none }
    p { padding:0 !important; margin:0 !important }
    img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
    .mcnPreviewText { display: none !important; }
    .text-footer2 a { color: #ffffff; }

    /* Mobile styles */
    @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {

    .mobile-shell { width: 100% !important; min-width: 100% !important; }

    .m-center { text-align: center !important; }
    .mobile-td {display:inline-block !important;padding:5px !important;}
    .m-left { text-align: left !important; margin-right: auto !important; }
    .m-justify { text-align: justify !important; margin-right: auto !important; }
    .m-right { text-align: right !important; margin-right: auto !important; }

    .center { margin: 0 auto !important; }
    .center-float {float:none!important; margin: auto!important; }
    .content2 { padding: 8px 15px 12px !important; }
    .t-left { float: left !important; margin-right: 30px !important; }
    .t-left-2 { float: left !important; }
    .t-right-2 { float: right !important; }

    .td { width: 100% !important; min-width: 100% !important;display:block !important }
    .tr { width: 100% !important; min-width: 100% !important;display:inline !important }


    .content { padding: 30px 15px !important; }
    .section { padding: 30px 15px 0px !important; }

    .m-br-15 { height: 15px !important; }
    .mpb5 { padding-bottom: 5px !important; }
    .mpb15 { padding-bottom: 15px !important; }
    .mpb20 { padding-bottom: 20px !important; }
    .mpb30 { padding-bottom: 30px !important; }
    .mp30 { padding-bottom: 30px !important; }
    .m-padder { padding: 0px 15px !important; }
    .m-padder2 { padding-left: 15px !important; padding-right: 15px !important; }
    .p70 { padding: 30px 0px !important; }
    .pt70 { padding-top: 30px !important; }
    .p0-15 { padding: 0px 15px !important; }
    .p30-15 { padding: 30px 15px !important; }
    .p30-15-0 { padding: 30px 15px 0px 15px !important; }
    .p0-15-30 { padding: 0px 15px 30px 15px !important; }


    .text-footer { text-align: center !important; }

    .m-td,
    .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

    .m-block { display: block !important; }

    .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }

    .column,
    .column-dir,
    .column-top,
    .column-empty,
    .column-top-30,
    .column-top-60,
    .column-empty2,
    .column-bottom { float: right !important; width: 100% !important; display: block !important; }

    .column-empty { padding-bottom: 15px !important; }
    .column-empty2 { padding-bottom: 30px !important; }

    .content-spacing { width: 15px !important; }
    }
    </style>
  </head>
  <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">the test email is here<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
  </div>

  <body class="bod" data-id="__react-email-body" style="padding:0 !important;margin:0 !important;display:block !important;min-width:100% !important;width:100% !important;background-color:#eeeeee;background:linear-gradient(306.37deg, #77fdd9,rgb(68, 226, 231))">
    <table align="center" width="100%" data-id="__react-email-container" role="presentation" cellSpacing="0" cellPadding="0" border="0" style="max-width:37.5em;margin:0px auto;background:#ffffff">
      <tbody>
        <tr style="width:100%">
          <td>
            <!--COLUMN CONTAINER -->
            <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" data-id="react-email-section" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" data-id="react-email-row" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td width="100%" valign="middle" align="center" data-id="__react-email-column" style="padding-bottom:0px;padding-top:0px;padding-left:0px;padding-right:0px">
                            <table align="center"  width="100%" data-id="__1017-email-section" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                              <tr>
                                <td    valign="middle" style="width:100%;border:none;padding-top:14px;padding-bottom:14px;padding-left:14px;padding-right:14px;">
                                  <table style="height:100%" width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr width="100%" style="height:100%">
                                      <!--SUB COLUMN -->
                                      <td width="100%"   class="td" align="center" data-id="__react-email-column" style="width:100%;border:none;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;;padding:0px">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px">
                                          <tr width="100%">
                                            <td  width="100%" align="center" style="font-size:0pt;mso-line-height-rule:exactly;line-height:0pt;padding:0;margin:0;font-weight:normal;height:0px">
                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr width="100%">
                                                  <td align="left">
                                                    <table class="" align="left" border="0" cellPadding="0" cellspacing="0">
                                                      <tr>
                                                        <td align="center" width="100%" style="font-size:12px;line-height:12px;color:#000000"><a href="https://inboxified.web.app" style="color:#000000;text-decoration:none"><img border="0" mc:edit="mc0id_ToA6787q1q1uY11" editable="true" data-id="react-email-img" alt="image" src="http://res.cloudinary.com/brainpit/image/upload/v1721827754/vzofb7uucfwbuuncasdr.png" width="70" style="display:block;outline:none;border:none;text-decoration:none;width:70px;max-width:100%;border-radius:0undefined;margin:0px" /></a></td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!-- SUB COLUMN -->
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--END COLUMN CONTAINER -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr width="100%">
                <td align="center" style="padding-left:0px;padding-right:0px">
                  <table align="left" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr width="100%">
                      <td align="center" class="" style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:400;letter-spacing:0px;mso-line-height-rule:exactly;line-height:16px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;;font-size:20px;text-transform:capitalize;text-align:left">
                        <multiline>
                          <div mc:edit="mcid_3c5F6YY1uT4udd4" style="color:#1E1E1E;text-decoration:none">hello CEO,</div>
                        </multiline>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr width="100%">
                <td align="center" style="padding-left:0px;padding-right:0px">
                  <table align="left" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr width="100%">
                      <td align="center" class="" style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:400;letter-spacing:0.8px;mso-line-height-rule:exactly;line-height:16px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;;font-size:10px;text-transform:none;text-align:left">
                        <multiline>
                          <div mc:edit="mcid_dgoqY1g83cFQ433" style="color:#1E1E1E;text-decoration:none">some one is trying to reach out from our website below is the message. </div>
                        </multiline>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr width="100%">
                <td align="center" style="padding-left:0px;padding-right:0px">
                  <table align="left" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr width="100%">
                      <td align="center" class="" style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:500;letter-spacing:0.8px;mso-line-height-rule:exactly;line-height:16px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;;font-size:14px;text-transform:none;text-align:left">
                        <multiline>
                          <div mc:edit="mcid_43cF39oo19c7798" style="color:#1E1E1E;text-decoration:none">${message}</div>
                        </multiline>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="center" width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr width="100%" style="margin:0 auto">
                <td width="100%" align="center">
                  <table class="m-center" border="0" cellspacing="0" cellpadding="0" style="padding-left:10px;padding-right:10px;padding-bottom:020px;padding-top:020px">
                    <tr width="100%">
                      <td width="160px" style="max-width:650px;font-family:'Poppins', sans-serif;color:#ffffff;font-size:14px;line-height:14px">
                        <!--BUTTON -->
                        <div><!--[if mso]>
                          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href=mailto:${email} style="height:38px;v-text-anchor:middle;width:160px;" arcsize="NaN%" strokecolor="#32C9D6" fillcolor="#32C9D6">
                          <w:anchorlock/>
                          <center style="color:#ffffff;font-family:'Poppins', sans-serif;font-size:14;font-weight:600;">reply back</center>
                          </v:roundrect>
                          <![endif]--><a href="mailto:${email}" mc:edit="mcid_Ag8QQQ1oqTg63Ac"
                          style="letter-spacing:0px;lineHeight:14px;font-weight:600;text-transform:capitalize;background-color:#32C9D6;border:2px #32C9D6 solid;border-radius:5px;color:#ffffff;display:block;font-family:'Poppins', sans-serif;padding:10px 10px;font-size:14px;font-weight:600;text-align:center;text-decoration:none;-webkit-text-size-adjust:none;mso-hide:all;">reply back</a>
                        </div>
                        <!-- END BUTTON -->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!--COLUMN CONTAINER -->
            <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" data-id="react-email-section" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" data-id="react-email-row" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td width="100%" valign="middle" align="center" data-id="__react-email-column" style="padding-bottom:0px;padding-top:30px;padding-left:0px;padding-right:0px">
                            <table align="center"  width="100%" data-id="__1017-email-section" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                              <tr>
                                <td    valign="middle" style="width:100%;border:none;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;background:#ffffff;">
                                  <table style="height:100%" width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr width="100%" style="height:100%">
                                      <!--SUB COLUMN -->
                                      <td width="50%"   class="td" align="center" data-id="__react-email-column" style="width:50%;border:none;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;;padding:0px">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px">
                                          <tr width="100%">
                                            <td  width="100%" align="center" style="font-size:0pt;mso-line-height-rule:exactly;line-height:0pt;padding:0;margin:0;font-weight:normal;height:0px">
                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr width="100%">
                                                  <td width="100%" align="left">
                                                    <table style="padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px" align="left" width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr width="100%">
                                                        <td class="m-right" align="left" style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:500;letter-spacing:0px;mso-line-height-rule:exactly;line-height:16px;;font-size:15px;text-transform:none;text-align:center;padding:0px 0px 0px 0px">
                                                          <multiline>
                                                            <div mc:edit="mc5id_qQ1uo11ouQd7g51" class="link2">prospect name</div>
                                                          </multiline>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!-- SUB COLUMN -->

                                      <!-- COLUMN SPACER -->
                                      <td class="td" height="10" width="4%" data-id="__react-email-column" style="width:4%;max-width:4%;height:10px;font-size:10px;line-height:10px">&nbsp;</td>
                                      <!--END COLUMN SPACER -->

                                      <!--SUB COLUMN -->
                                      <td width="50%"   class="td" align="center" data-id="__react-email-column" style="width:50%;border:none;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;;padding:0px">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px">
                                          <tr width="100%">
                                            <td  width="100%" align="center" style="font-size:0pt;mso-line-height-rule:exactly;line-height:0pt;padding:0;margin:0;font-weight:normal;height:0px">
                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr width="100%">
                                                  <td width="100%" align="left">
                                                    <table style="padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px" align="left" width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr width="100%">
                                                        <td class="m-right" align="left" style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:400;letter-spacing:0px;mso-line-height-rule:exactly;line-height:16px;;font-size:13px;text-transform:none;text-align:center;padding:0px 0px 0px 0px">
                                                          <multiline>
                                                            <div mc:edit="mc5id_qQ1uo11ouQd7g51" class="link2">${name}</div>
                                                          </multiline>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!-- SUB COLUMN -->
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--END COLUMN CONTAINER -->

            <!--COLUMN CONTAINER -->
            <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" data-id="react-email-section" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" data-id="react-email-row" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td width="100%" valign="middle" align="center" data-id="__react-email-column" style="padding-bottom:30px;padding-top:0px;padding-left:0px;padding-right:0px">
                            <table align="center"  width="100%" data-id="__1017-email-section" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                              <tr>
                                <td    valign="middle" style="width:100%;border:none;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;background:#ffffff;">
                                  <table style="height:100%" width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr width="100%" style="height:100%">
                                      <!--SUB COLUMN -->
                                      <td width="50%"   class="td" align="center" data-id="__react-email-column" style="width:50%;border:none;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;;padding:0px">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px">
                                          <tr width="100%">
                                            <td  width="100%" align="center" style="font-size:0pt;mso-line-height-rule:exactly;line-height:0pt;padding:0;margin:0;font-weight:normal;height:0px">
                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr width="100%">
                                                  <td width="100%" align="left">
                                                    <table style="padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px" align="left" width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr width="100%">
                                                        <td class="m-right" align="left" style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:500;letter-spacing:0px;mso-line-height-rule:exactly;line-height:16px;;font-size:15px;text-transform:none;text-align:center;padding:0px 0px 0px 0px">
                                                          <multiline>
                                                            <div mc:edit="mc6id_qQ1uo11ouQd7g51" class="link2">prospect contact</div>
                                                          </multiline>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!-- SUB COLUMN -->

                                      <!-- COLUMN SPACER -->
                                      <td class="td" height="10" width="4%" data-id="__react-email-column" style="width:4%;max-width:4%;height:10px;font-size:10px;line-height:10px">&nbsp;</td>
                                      <!--END COLUMN SPACER -->

                                      <!--SUB COLUMN -->
                                      <td width="50%"   class="td" align="center" data-id="__react-email-column" style="width:50%;border:none;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;;padding:0px">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px">
                                          <tr width="100%">
                                            <td  width="100%" align="center" style="font-size:0pt;mso-line-height-rule:exactly;line-height:0pt;padding:0;margin:0;font-weight:normal;height:0px">
                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr width="100%">
                                                  <td width="100%" align="left">
                                                    <table style="padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px" align="left" width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr width="100%">
                                                        <td class="m-right" align="left" style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:400;letter-spacing:0px;mso-line-height-rule:exactly;line-height:16px;;font-size:13px;text-transform:none;text-align:center;padding:0px 0px 0px 0px">
                                                          <multiline>
                                                            <div mc:edit="mc6id_qQ1uo11ouQd7g51" class="link2">${email}</div>
                                                          </multiline>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <!-- SUB COLUMN -->
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--END COLUMN CONTAINER -->

            <!-- START ROW Container -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr width="100%">
                <td style="padding-bottom:0px;padding-top:0px;padding-left:0px;padding-right:0px" width="100%" valign="middle" align="center">
                  <table align="center" width="100%" data-id="__1017-email-section" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                    <tr>
                      <td width="100%"   valign="middle" style="width:100%;border:none;padding-top:14px;padding-bottom:14px;padding-left:14px;padding-right:14px;background:#f0fffe;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr align="center">
                            <td>
                              <table width="50" class="">
                                <tr>
                                  <td style="width:100%;border:undefinedpx undefined undefined;padding:0px"><a href="https://inboxified.web.app"><img border="0" editable="true" mc:edit="mc7id_Qd9g93g8Tqq9dc1" data-id="react-email-img" alt="image" src="http://res.cloudinary.com/brainpit/image/upload/v1721827754/vzofb7uucfwbuuncasdr.png" width="100%" style="display:block;outline:none;border:none;text-decoration:none;width:100%;border-radius:0px" /></a></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" width="100%">
                              <table align="center" width="" data-id="react-email-section" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                                <tbody>
                                  <tr>
                                    <td>
                                      <table align="center" width="100%" data-id="react-email-row" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                        <tbody style="width:100%">
                                          <tr style="width:100%">
                                            <td data-id="__react-email-column" style="font-family:'Poppins','Arial',sans-serif;font-size:13px;color:#32c9d6;font-weight:600">
                                              created with
                                            </td>
                                            <td data-id="__react-email-column">
                                              <img width="100" src="http://res.cloudinary.com/brainpit/image/upload/v1721829626/ibsas4lwealhsrdk8i0g.png" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" width="100%">
                              <table width="100%" style="width:100%;max-width:100%" role="presentation" align="left" border="0" cellspacing="0" cellpadding="0">
                                <tr width="100%">
                                  <td style="color:#1E1E1E;display:block;font-family:'Poppins', sans-serif;font-weight:400;letter-spacing:0px;mso-line-height-rule:exactly;line-height:16px;;font-size:10px;text-transform:capitalize;text-align:center;padding:0px 0px 0px 0px" class="" align="center">
                                    <multiline>
                                      <div mc:edit="mc7id_9Ad819qQ17qgWTz" class="link2">all right reserved copyright &copy: inboxified.</div>
                                    </multiline>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!--END ROW Container -->
          </td>
        </tr>
      </tbody>
    </table>
  </body>

</html>`

}