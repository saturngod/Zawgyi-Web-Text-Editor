/*******************************
FOR Myanmar Character Map
**********************************/
/*
Old SYSTEM
keys_caps = new Array ('&#4096;','&#4097;','&#4098;','&#4099;','&#4100;','&#4101;','&#4102;','&#4103;','&#4104;','&#4105;','&#4106;','&#4107;','&#4108;','&#4109;','&#4110;','&#4111;','&#4112;','&#4113;','&#4114;','&#4115;','&#4116;','&#4117;','&#4118;','&#4119;','&#4120;','&#4121;','&#4122;','&#4123;','&#4240;','&#4124;','&#4125;','&#4126;','&#4230;','&#4127;','&#4128;','&#4129;','&#4175;','&#4132;','&#4133;','&#4134;','&#4135;','&#4137;','&#4138;','&#4172;','&#4173;','&#4174;','&#4241;','&#4242;');

keys_scroll = new Array ('&#4131;','--&#4139;','--&#4186;','--&#4140;','--&#4141;','--&#4142;','--&#4143;','--&#4144;','&#4145;','--&#4146;','--&#4147;','--&#4148;','--&#4157;','--&#4150;','--&#4151;','--&#4152;','--&#4153;','--&#4154;','--&#4220;','--&#4156;','--&#4209;','--&#4214;','--&#4219;','&#4160;','&#4161;','&#4162;','&#4163;','&#4164;','&#4165;','&#4166;','&#4167;','&#4168;','&#4169;','&#4170;','&#4171;','--&#4221;','&#4222;--','&#4223;--','&#4224;--','&#4225;--','&#4226;--','&#4227;--','&#4228;--','&#4155;--','--&#4244;','--&#4245;','--&#4246;','&#4247;');

spc=new Array('--&#4196;','--&#4198;','--&#4199;','--&#4209;','--&#4210;','--&#4215;','--&#4246;','--&#4220;','&#4132;','&#4172;','--&#4216;', '--&#4192;','&#4105;','&#4173;','&#4202;','&#4230;','--&#4197;','--&#4208;','&#4104;','--&#4218;','--&#4221;','--&#4231;','--&#4238;', '--&#4236;','&#4227;--','&#4228;--','--&#4233;','--&#4237;','--&#4235;','--&#4213;','--&#4214;','--&#4217;','--&#4200;','--&#4211;',' --&#4212;','--&#4193;','--&#4195;','--&#4229;','--&#4219;','&#4203;','--&#4201;','&#4225;--','&#4226;--');

*/

keys=new Array('&#4096;','&#4097;','&#4098;','&#4099;','&#4100;','&#4101;','&#4102;','&#4103;','&#4104;','&#4105;','&#4106;','&#4107;','&#4108;','&#4109;','&#4110;','&#4111;','&#4112;','&#4113;','&#4114;','&#4115;','&#4116;','&#4117;','&#4118;','&#4119;','&#4120;','&#4121;','&#4122;','&#4123;','&#4240;','&#4124;','&#4125;','&#4126;','&#4230;','&#4127;','&#4128;','&#4129;','&#4175;','&#4132;','&#4133;','&#4134;','&#4135;','&#4137;','&#4138;','&#4172;','&#4173;','&#4174;','&#4241;','&#4242;','&#4131;','--&#4139;','--&#4186;','--&#4140;','--&#4141;','--&#4142;','--&#4143;','--&#4144;','&#4145;','--&#4146;','--&#4147;','--&#4148;','--&#4157;','--&#4150;','--&#4151;','--&#4152;','--&#4153;','--&#4154;','--&#4220;','--&#4156;','--&#4209;','--&#4214;','--&#4219;','&#4160;','&#4161;','&#4162;','&#4163;','&#4164;','&#4165;','&#4166;','&#4167;','&#4168;','&#4169;','&#4170;','&#4171;','--&#4221;','&#4222;--','&#4223;--','&#4224;--','&#4225;--','&#4226;--','&#4227;--','&#4228;--','&#4155;--','--&#4244;','--&#4245;','--&#4246;','&#4247;','--&#4196;','--&#4198;','--&#4199;','--&#4209;','--&#4210;','--&#4215;','--&#4246;','--&#4220;','&#4132;','&#4172;','--&#4216;', '--&#4192;','&#4105;','&#4173;','&#4202;','&#4230;','--&#4197;','--&#4208;','&#4104;','--&#4218;','--&#4221;','--&#4231;','--&#4238;', '--&#4236;','&#4227;--','&#4228;--','--&#4233;','--&#4237;','--&#4235;','--&#4213;','--&#4214;','--&#4217;','--&#4200;','--&#4211;',' --&#4212;','--&#4193;','--&#4195;','--&#4229;','--&#4219;','&#4203;','--&#4201;','&#4225;--','&#4226;--');

/************************************************************/

/**********************************************
For Browser 
**************************************************/

var ua = navigator.userAgent.toLowerCase();
	isIE = ((ua.indexOf("msie") != -1) && (ua.indexOf("opera") == -1) && (ua.indexOf("webtv") == -1)); 
	isGecko = (ua.indexOf("gecko") != -1);
	isSafari = (ua.indexOf("safari") != -1);
	isKonqueror = (ua.indexOf("konqueror") != -1);

/**********************************************************/

if(isGecko)
{
	//alert('firefox');
	document.onkeypress = handleKeys;
	
	
	//addEventListener("keypress", s_ConvertKey, true);
}
else
{
document.onkeypress=s_ConvertKey;
document.onkeydown=keyboardchange;


}


// set arr_lang with default langauge startup options - 0 for English and 1 for Myanmar
// set the field index in the input or textarea when calling the function
// the array must match number of fields for which to use Ponnya_Web
var s_inputArray = new Array();

// set default language to Myanmar, 2 = Myanmar, 1 = English
var s_default_language = 1;
var s_language = s_default_language;
var s_focusedInput ;
 // For Text Editor Object ( textarea )

function s_ConvertKey() {
e = event.srcElement.id;


if (e) {
  unichar = "";	
  e = event;
  if (e.keyCode) keycode=e.keyCode;
   else keycode=e.which;
   
  
 
  // check if language is set to 1 (Myanmar)
  if (s_language==2) {
	switch(keycode) {
		case 117 : keycode = 4096; break;
		case 99 : keycode = 4097; break;
		case 42 : keycode = 4098; break;
		case 67 : keycode = 4099; break;
		case 105 : keycode = 4100; break;
		case 112 : keycode = 4101; break;
		case 113 : keycode = 4102; break;
		case 90 : keycode = 4103; break;
		case 245 : keycode = 4104; break;
		case 218 : keycode = 4105; break;
		case 110 : keycode = 4106; break;
		case 35 : keycode = 4107; break;
		case 88 : keycode = 4108; break;
		case 33 : keycode = 4109; break;
		case 161 : keycode = 4110; break;
		case 80 : keycode = 4111; break;
		case 119 : keycode = 4112; break;
		case 120 : keycode = 4113; break;
		case 39 : keycode = 4114; break;
		case 34 : keycode = 4115; break;
		case 101 : keycode = 4116; break;
		case 121 : keycode = 4117; break;
		case 122 : keycode = 4118; break;
		case 65 : keycode = 4119; break;
		case 98 : keycode = 4120; break;
		case 114 : keycode = 4121; break;
		case 44 : keycode = 4122; break;
		case 38 : keycode = 4123; break;
		case 118 : keycode = 4124; break;
		case 234 : keycode = 4125; break;
		case 111 : keycode = 4126; break;
		case 91 : keycode = 4127; break;
		case 86 : keycode = 4128; break;
		case 116 : keycode = 4129; break;
		case 163 : keycode = 4131; break;
		case 254 : keycode = 4132; break;
		case 79 : keycode = 4133; break;
		case 232 : keycode = 4134; break;
		case 235 : keycode = 4137; break;
		case 236 : keycode = 4138; break;
		case 103 : keycode = 4139; break;
		case 109 : keycode = 4140; break;
		case 100 : keycode = 4141; break;
		case 68 : keycode = 4142; break;
		case 107 : keycode = 4143; break;
		case 108 : keycode = 4144; break;
		case 97 : keycode = 4145; break;
		case 74 : keycode = 4146; break;
		case 75 : keycode = 4147; break;
		case 76 : keycode = 4148; break;
		case 72 : keycode = 4150; break;
		case 104 : keycode = 4151; break;
		case 59 : keycode = 4152; break;
		case 102 : keycode = 4153; break;
		case 115 : keycode = 4154; break;
		case 106 : keycode = 4155; break;
		case 71 : keycode = 4156; break;
		case 83 : keycode = 4157; break;
		case 48 : keycode = 4160; break;
		case 49 : keycode = 4161; break;
		case 50 : keycode = 4162; break;
		case 51 : keycode = 4163; break;
		case 52 : keycode = 4164; break;
		case 53 : keycode = 4165; break;
		case 54 : keycode = 4166; break;
		case 55 : keycode = 4167; break;
		case 56 : keycode = 4168; break;
		case 57 : keycode = 4169; break;
		case 63 : keycode = 4170; break;
		case 47 : keycode = 4171; break;
		case 252 : keycode = 4172; break;
		case 237 : keycode = 4173; break;
		case 164 : keycode = 4174; break;
		case 92 : keycode = 4175; break;
		case 58 : keycode = 4186; break;
		case 250 : keycode = 4192; break;
		case 169 : keycode = 4193; break;
		case 190 : keycode = 4194; break;
		case 162 : keycode = 4195; break;
		case 70 : keycode = 4196; break;
		case 246 : keycode = 4197; break;
		case 228 : keycode = 4198; break;
		case 249 : keycode = 4199; break;
		case 198 : keycode = 4200; break;
		case 209 : keycode = 4201; break;
		case 251 : keycode = 4202; break;
		case 241 : keycode = 4203; break;
		case 179 : keycode = 4204; break;
		case 178 : keycode = 4205; break;
		case 215 : keycode = 4206; break;
		case 185 : keycode = 4207; break;
		case 214 : keycode = 4208; break;
		case 229 : keycode = 4209; break;
		case 197 : keycode = 4210; break;
		case 172 : keycode = 4211; break;
		case 166 : keycode = 4212; break;
		case 180 : keycode = 4213; break;
		case 168 : keycode = 4214; break;
		case 233 : keycode = 4215; break;
		case 220 : keycode = 4216; break;
		case 230 : keycode = 4217; break;
		case 193 : keycode = 4218; break;
		case 199 : keycode = 4219; break;
		case 174 : keycode = 4220; break;
		case 223 : keycode = 4221; break;
		case 77 : keycode = 4222; break;
		case 78 : keycode = 4223; break;
		case 66 : keycode = 4224; break;
		case 96 : keycode = 4225; break;
		case 126 : keycode = 4226; break;
		case 238 : keycode = 4227; break;
		case 239 : keycode = 4228; break;
		case 244 : keycode = 4229; break;
		case 243 : keycode = 4230; break;
		case 167 : keycode = 4231; break;
		case 73 : keycode = 4232; break;
		case 170 : keycode = 4233; break;
		case 84 : keycode = 4234; break;
		case 216 : keycode = 4235; break;
		case 208 : keycode = 4236; break;
		case 248 : keycode = 4237; break;
		case 240 : keycode = 4238; break;
		case 69 : keycode = 4239; break;
		case 189 : keycode = 4240; break;
		case 64 : keycode = 4241; break;
		case 124 : keycode = 4242; break;
		case 123 : keycode = 4243; break;
		case 89 : keycode = 4244; break;
		case 85 : keycode = 4245; break;
		case 201 : keycode = 4246; break;
		case 165 : keycode = 4247; break;
		case 81 : keycode = 4154; unichar = String.fromCharCode(4157); break;
		case 82 : keycode = 4221; unichar = String.fromCharCode(4156); break;
		case 87 : keycode = 4221; unichar = String.fromCharCode(4234); break;		
    }
	e.keyCode=keycode;
	
  }
  unichar += String.fromCharCode(e.keyCode);

  s_insertAtCursor(s_focusedInput, unichar);
  if (keycode == 13) return true;
  else return false;
}
else return true;
}


/* FIREFOX */

function handleKeys(e)
{
var theKey;



theKey = e.which;



//if (e.which==96) document._ctl0.mm.checked = !document._ctl0.mm.checked;



var i=document.getElementById('subj').value.length-1;


if (e.altKey && (e.which==78 || e.which==110)) 
{
	document.getElementById('chklan').checked=!document.getElementById('chklan').checked;
//	mmswitch('subj');

	if(document.getElementById('chklan').checked)
	{
		s_language = 2;
	}
	else
	{
		s_language = 1;
	}
	return false;
}
//if (e.which==96) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+""+ f.value.substring(f.selectionStart); f.setSelectionRange(g,g); return false;}


if (s_language==2 )

{



		    if (e.which==117) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1000"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==99)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1001"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==42)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1002"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==67)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1003"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==105) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1004"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==112) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1005"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==113) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1006"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==90)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1007"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==245) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1008"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==218) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1009"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==110) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u100A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==35)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u100B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==88)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u100C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==33)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u100D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==161) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u100E"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==80)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u100F"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==119) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1010"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==120) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1011"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==39)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1012"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==34)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1013"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==101) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1014"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==121) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1015"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==122) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1016"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==65)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1017"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==98)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1018"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==114) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1019"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==44)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u101A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==38)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u101B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==118) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u101C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==234) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u101D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==111) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u101E"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==91)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u101F"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==86)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1020"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==116) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1021"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==163) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1023"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==254) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1024"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==79)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1025"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==232) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1026"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==123) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1027"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;} 



		    if (e.which==235) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1029"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==236) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u102A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==103) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u102B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==109) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u102C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==100) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u102D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==68)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u102E"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==107) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u102F"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==108) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1030"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==97)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1031"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==74)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1032"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==75)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1033"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==76)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1034"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==72)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1036"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==104) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1037"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==59)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1038"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==102) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1039"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==115) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u103A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==106) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u103B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==71)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u103C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==83)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u103D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==48)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1040"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==49)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1041"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==50)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1042"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==51)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1043"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==52)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1044"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==53)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1045"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==54)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1046"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==55)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1047"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==56)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1048"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==57)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1049"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==63)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u104A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==47)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u104B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==252) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u104C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==237) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u104D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==164) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u104E"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==92)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u104F"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==58)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u105A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==250) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1060"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==169) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1061"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==190) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1062"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==162) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1063"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==70)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1064"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==246) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1065"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==228) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1066"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==249) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1067"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==198) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1068"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==209) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1069"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==251) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u106A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==241) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u106B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==179) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u106C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==178) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u106D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==215) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u106E"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==185) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u106F"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==214) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1070"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==229) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1071"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==197) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1072"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==172) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1073"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==166) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1074"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==180) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1075"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==168) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1076"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==233) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1077"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==220) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1078"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==230) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1079"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==193) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==199) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==174) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==223) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==77)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107E"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==78)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107F"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==66)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1080"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==96)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1081"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==126) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1082"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==238) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1083"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==239) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1084"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==244) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1085"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==243) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1086"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==167) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1087"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==73)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1088"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==170) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1089"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==84)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u108A"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==216) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u108B"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==208) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u108C"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==248) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u108D"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==240) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u108E"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==69)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u108F"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==189) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1090"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==64)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1091"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==124) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1092"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==123) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1093"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==89)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1094"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==85)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1095"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==201) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1096"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==165) { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u1097"+f.value.substring(f.selectionStart); g++; f.setSelectionRange(g,g); return false;}



		    if (e.which==81)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u103D\u103A"+f.value.substring(f.selectionStart); g+=2; f.setSelectionRange(g,g); return false;}



		    if (e.which==82)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107D\u103C"+f.value.substring(f.selectionStart); g+=2; f.setSelectionRange(g,g); return false;}



		    if (e.which==87)  { var f=e.target; var g=f.selectionStart; f.value=f.value.substring(0, f.selectionStart)+"\u107D\u108A"+f.value.substring(f.selectionStart); g+=2; f.setSelectionRange(g,g); return false;}



			status=theKey;



}



return true;



}

/*************/

function mmswitch(myField)
{
	if(document.getElementById('chklan').checked)
	{
		s_language = 2;
	}
	else
	{
		s_language = 1;
	}
	
	
	 if(!isGecko)
  	 {	
		myField=document.getElementById(myField)
		
		s_focusedInput=myField;	
	  
		s_inputArray[s_focusedInput.id]=s_language;
	  
	 
		s_insertAtCursor(s_focusedInput,'');
  	}
  
  
}

function s_insertAtCursor(s_myField, myValue) {
	

	if (document.selection) {
		// IE support
		s_myField.focus();
		var sel = document.selection;

		var rng = sel.createRange();
		rng.collapse;
		
		rng.text = myValue;

	} else if (s_myField.selectionStart || s_myField.selectionStart == '0') {
		// MOZILLA/NETSCAPE support
		// not working yet, only IE supported
		var startPos = s_myField.selectionStart;
		var endPos = s_myField.selectionEnd;
		s_myField.value = s_myField.value.substring(0, startPos)
			+ myValue
			+ s_myField.value.substring(endPos, s_myField.value.length);
			
		
	} else {
		s_myField.value += myValue;
	}
	//focusedInput.doScroll("down"); 
}

function s_makeFocused(){
	s_focusedInput = event.srcElement;
	if (!s_inputArray[s_focusedInput.id]) {
		s_inputArray[s_focusedInput.id] = s_default_language;
	}
	
	s_language = s_inputArray[s_focusedInput.id];
}

function s_specialchar()
{
	 var chr = showModalDialog("popups/special.html", window, "resizable: no; help: no; status: no; scroll: no;");
	  if (chr){ s_insertAtCursor(s_focusedInput, chr);}
}

function keyboardchange(e)
{
	
	if(isGecko)
	{
		keycode=e.which;
	}
	else
	{
		e = event;
		if (e.keyCode) keycode=e.keyCode;
		else keycode=e.which;
	}



	if (e.altKey && keycode==78) 
	{		
		
		document.getElementById('chklan').checked=!document.getElementById('chklan').checked;
		mmswitch('subj');
		
	}
}


function letters() {
	
	//Intialize The Row Check Counter
	row_chk=0;
	
	//Start The Looping
	for(i = 0; i < keys.length; i++) {
		
		j=keys[i];
		
		// 1 row 16 button
		if(row_chk==16)
		{
			document.write('</tr><tr>');
			//Restart The Counter
			row_chk=0;
		}
		document.write('<td><input style="font-family:Zawgyi-one;" type="button" class="mainoption" value="' + j + '"  onClick="javascript:insertspc(\''+j+'\')" /></td>');
		//Check For The Row
		row_chk++;
	}
}

function insertspc(chr)
{
	

	chr=chr.replace('--','');
s_focusedInput=document.getElementById('subj');
	s_insertAtCursor(s_focusedInput, chr);
}
