export const decodeHtmlWithoutDOM = (string) => {
  /*var chars = ["©","Û","®","ž","Ü","Ÿ","Ý","$","Þ","%","¡","ß","¢","à","£","á","À","¤","â","Á","¥","ã","Â","¦","ä","Ã","§","å","Ä","¨","æ","Å","©","ç","Æ","ª","è","Ç","«","é","È","¬","ê","É","­","ë","Ê","®","ì","Ë","¯","í","Ì","°","î","Í","±","ï","Î","²","ð","Ï","³","ñ","Ð","´","ò","Ñ","µ","ó","Õ","¶","ô","Ö","·","õ","Ø","¸","ö","Ù","¹","÷","Ú","º","ø","Û","»","ù","Ü","@","¼","ú","Ý","½","û","Þ","€","¾","ü","ß","¿","ý","à","‚","À","þ","á","ƒ","Á","ÿ","å","„","Â","æ","…","Ã","ç","†","Ä","è","‡","Å","é","ˆ","Æ","ê","‰","Ç","ë","Š","È","ì","‹","É","í","Œ","Ê","î","Ë","ï","Ž","Ì","ð","Í","ñ","Î","ò","‘","Ï","ó","’","Ð","ô","“","Ñ","õ","”","Ò","ö","•","Ó","ø","–","Ô","ù","—","Õ","ú","˜","Ö","û","™","×","ý","š","Ø","þ","›","Ù","ÿ","œ","Ú"];
    var codes = ["&copy;","&#219;","&reg;","&#158;","&#220;","&#159;","&#221;","&#36;","&#222;","&#37;","&#161;","&#223;","&#162;","&#224;","&#163;","&#225;","&Agrave;","&#164;","&#226;","&Aacute;","&#165;","&#227;","&Acirc;","&#166;","&#228;","&Atilde;","&#167;","&#229;","&Auml;","&#168;","&#230;","&Aring;","&#169;","&#231;","&AElig;","&#170;","&#232;","&Ccedil;","&#171;","&#233;","&Egrave;","&#172;","&#234;","&Eacute;","&#173;","&#235;","&Ecirc;","&#174;","&#236;","&Euml;","&#175;","&#237;","&Igrave;","&#176;","&#238;","&Iacute;","&#177;","&#239;","&Icirc;","&#178;","&#240;","&Iuml;","&#179;","&#241;","&ETH;","&#180;","&#242;","&Ntilde;","&#181;","&#243;","&Otilde;","&#182;","&#244;","&Ouml;","&#183;","&#245;","&Oslash;","&#184;","&#246;","&Ugrave;","&#185;","&#247;","&Uacute;","&#186;","&#248;","&Ucirc;","&#187;","&#249;","&Uuml;","&#64;","&#188;","&#250;","&Yacute;","&#189;","&#251;","&THORN;","&#128;","&#190;","&#252","&szlig;","&#191;","&#253;","&agrave;","&#130;","&#192;","&#254;","&aacute;","&#131;","&#193;","&#255;","&aring;","&#132;","&#194;","&aelig;","&#133;","&#195;","&ccedil;","&#134;","&#196;","&egrave;","&#135;","&#197;","&eacute;","&#136;","&#198;","&ecirc;","&#137;","&#199;","&euml;","&#138;","&#200;","&igrave;","&#139;","&#201;","&iacute;","&#140;","&#202;","&icirc;","&#203;","&iuml;","&#142;","&#204;","&eth;","&#205;","&ntilde;","&#206;","&ograve;","&#145;","&#207;","&oacute;","&#146;","&#208;","&ocirc;","&#147;","&#209;","&otilde;","&#148;","&#210;","&ouml;","&#149;","&#211;","&oslash;","&#150;","&#212;","&ugrave;","&#151;","&#213;","&uacute;","&#152;","&#214;","&ucirc;","&#153;","&#215;","&yacute;","&#154;","&#216;","&thorn;","&#155;","&#217;","&yuml;","&#156;","&#218;"];
    */
  let mapObj = {
    "&copy;": "©",
    "&#219;": "Û",
    "&reg;": "®",
    "&#158;": "ž",
    "&#220;": "Ü",
    "&#159;": "Ÿ",
    "&#221;": "Ý",
    "&#36;": "$",
    "&#222;": "Þ",
    "&#37;": "%",
    "&#161;": "¡",
    "&#223;": "ß",
    "&#162;": "¢",
    "&#224;": "à",
    "&#163;": "£",
    "&#225;": "á",
    "&Agrave;": "À",
    "&#164;": "¤",
    "&#226;": "â",
    "&Aacute;": "Á",
    "&#165;": "¥",
    "&#227;": "ã",
    "&Acirc;": "Â",
    "&#166;": "¦",
    "&#228;": "ä",
    "&Atilde;": "Ã",
    "&#167;": "§",
    "&#229;": "å",
    "&Auml;": "Ä",
    "&#168;": "¨",
    "&#230;": "æ",
    "&Aring;": "Å",
    "&#169;": "©",
    "&#231;": "ç",
    "&AElig;": "Æ",
    "&#170;": "ª",
    "&#232;": "è",
    "&Ccedil;": "Ç",
    "&#171;": "«",
    "&#233;": "é",
    "&Egrave;": "È",
    "&#172;": "¬",
    "&#234;": "ê",
    "&Eacute;": "É",
    "&#235;": "ë",
    "&Ecirc;": "Ê",
    "&#174;": "®",
    "&#236;": "ì",
    "&Euml;": "Ë",
    "&#175;": "¯",
    "&#237;": "í",
    "&Igrave;": "Ì",
    "&#176;": "°",
    "&deg;": "°",
    "&#238;": "î",
    "&Iacute;": "Í",
    "&#177;": "±",
    "&#239;": "ï",
    "&Icirc;": "Î",
    "&#178;": "²",
    "&#240;": "ð",
    "&Iuml;": "Ï",
    "&#179;": "³",
    "&#241;": "ñ",
    "&ETH;": "Ð",
    "&#180;": "´",
    "&#242;": "ò",
    "&Ntilde;": "Ñ",
    "&#181;": "µ",
    "&#243;": "ó",
    "&Otilde;": "Õ",
    "&#182;": "¶",
    "&#244;": "ô",
    "&Ouml;": "Ö",
    "&#183;": "·",
    "&#245;": "õ",
    "&Oslash;": "Ø",
    "&#184;": "¸",
    "&#246;": "ö",
    "&Ugrave;": "Ù",
    "&#185;": "¹",
    "&#247;": "÷",
    "&Uacute;": "Ú",
    "&#186;": "º",
    "&#248;": "ø",
    "&Ucirc;": "Û",
    "&#187;": "»",
    "&#249;": "ù",
    "&Uuml;": "Ü",
    "&#64;": "@",
    "&#188;": "¼",
    "&#250;": "ú",
    "&Yacute;": "Ý",
    "&#189;": "½",
    "&#251;": "û",
    "&THORN;": "Þ",
    "&#128;": "€",
    "&#190;": "¾",
    "&#252": "ü",
    "&szlig;": "ß",
    "&#191;": "¿",
    "&#253;": "ý",
    "&agrave;": "à",
    "&#130;": "‚",
    "&#192;": "À",
    "&#254;": "þ",
    "&aacute;": "á",
    "&#131;": "ƒ",
    "&#193;": "Á",
    "&#255;": "ÿ",
    "&aring;": "å",
    "&#132;": "„",
    "&#194;": "Â",
    "&aelig;": "æ",
    "&#133;": "…",
    "&#195;": "Ã",
    "&ccedil;": "ç",
    "&#134;": "†",
    "&#196;": "Ä",
    "&egrave;": "è",
    "&#135;": "‡",
    "&#197;": "Å",
    "&eacute;": "é",
    "&#136;": "ˆ",
    "&#198;": "Æ",
    "&ecirc;": "ê",
    "&#137;": "‰",
    "&#199;": "Ç",
    "&euml;": "ë",
    "&#138;": "Š",
    "&#200;": "È",
    "&igrave;": "ì",
    "&#139;": "‹",
    "&#201;": "É",
    "&iacute;": "í",
    "&#140;": "Œ",
    "&#202;": "Ê",
    "&icirc;": "î",
    "&#203;": "Ë",
    "&iuml;": "ï",
    "&#142;": "Ž",
    "&#204;": "Ì",
    "&eth;": "ð",
    "&#205;": "Í",
    "&ntilde;": "ñ",
    "&#206;": "Î",
    "&ograve;": "ò",
    "&#145;": "‘",
    "&#207;": "Ï",
    "&oacute;": "ó",
    "&#146;": "’",
    "&#208;": "Ð",
    "&ocirc;": "ô",
    "&#147;": "“",
    "&#209;": "Ñ",
    "&otilde;": "õ",
    "&#148;": "”",
    "&#210;": "Ò",
    "&ouml;": "ö",
    "&#149;": "•",
    "&#211;": "Ó",
    "&oslash;": "ø",
    "&#150;": "–",
    "&#212;": "Ô",
    "&ugrave;": "ù",
    "&#151;": "—",
    "&#213;": "Õ",
    "&uacute;": "ú",
    "&#152;": "˜",
    "&#214;": "Ö",
    "&ucirc;": "û",
    "&#153;": "™",
    "&#215;": "×",
    "&yacute;": "ý",
    "&#154;": "š",
    "&#216;": "Ø",
    "&thorn;": "þ",
    "&#155;": "›",
    "&#217;": "Ù",
    "&yuml;": "ÿ",
    "&#156;": "œ",
    "&#218;": "Ú",
    "&lt;b": "",
    "&rsquo;": "’",
    "&acirc;": "â",
    "&amp;": "&",
    "&#x27;": "’",
    "&quot;": '"',
  };

  let str = string
    .replace(/(&lt;([^>]+?)&gt;)/gi, "")
    .replace(
      /&quot;|&copy;|&#219;|&reg;|&#158;|&#220;|&#159;|&#221;|&#36;|&#222;|&#37;|&#161;|&#223;|&#162;|&#224;|&#163;|&#225;|&Agrave;|&#164;|&#226;|&Aacute;|&#165;|&#227;|&Acirc;|&#166;|&#228;|&Atilde;|&#167;|&#229;|&Auml;|&#168;|&#230;|&Aring;|&#169;|&#231;|&AElig;|&#170;|&#232;|&Ccedil;|&#171;|&#233;|&Egrave;|&#172;|&#234;|&Eacute;|&#235;|&Ecirc;|&#174;|&#236;|&Euml;|&#175;|&#237;|&Igrave;|&#176;|&deg;|&#238;|&Iacute;|&#177;|&#239;|&Icirc;|&#178;|&#240;|&Iuml;|&#179;|&#241;|&ETH;|&#180;|&#242;|&Ntilde;|&#181;|&#243;|&Otilde;|&#182;|&#244;|&Ouml;|&#183;|&#245;|&Oslash;|&#184;|&#246;|&Ugrave;|&#185;|&#247;|&Uacute;|&#186;|&#248;|&Ucirc;|&#187;|&#249;|&Uuml;|&#64;|&#188;|&#250;|&Yacute;|&#189;|&#251;|&THORN;|&#128;|&#190;|&#252|&szlig;|&#191;|&#253;|&agrave;|&#130;|&#192;|&#254;|&aacute;|&#131;|&#193;|&#255;|&aring;|&#132;|&#194;|&aelig;|&#133;|&#195;|&ccedil;|&#134;|&#196;|&egrave;|&#135;|&#197;|&eacute;|&#136;|&#198;|&ecirc;|&#137;|&#199;|&euml;|&#138;|&#200;|&igrave;|&#139;|&#201;|&iacute;|&#140;|&#202;|&icirc;|&#203;|&iuml;|&#142;|&#204;|&eth;|&#205;|&ntilde;|&#206;|&ograve;|&#145;|&#207;|&oacute;|&#146;|&#208;|&ocirc;|&#147;|&#209;|&otilde;|&#148;|&#210;|&ouml;|&#149;|&#211;|&oslash;|&#150;|&#212;|&ugrave;|&#151;|&#213;|&uacute;|&#152;|&#214;|&ucirc;|&#153;|&#215;|&yacute;|&#154;|&#216;|&thorn;|&#155;|&#217;|&yuml;|&#156;|&#218;|&lt;b|&rsquo;|&acirc;|&amp;|&#x27;/gi,
      function (matched) {
        return mapObj[matched];
      }
    );

  return str;
};
