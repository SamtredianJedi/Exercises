/*


he JavaScript navigator object is used for browser detection. It can be used to get browser information such as appName, appCodeName, userAgent etc.

The navigator object is the window property, so it can be accessed by:

window.navigator  
Or,

navigator  
Property of JavaScript navigator object
There are many properties of navigator object that returns information of the browser.

No.	Property	Description
1	appName	returns the name
2	appVersion	returns the version
3	appCodeName	returns the code name
4	cookieEnabled	returns true if cookie is enabled otherwise false
5	userAgent	returns the user agent
6	language	returns the language. It is supported in Netscape and Firefox only.
7	userLanguage	returns the user language. It is supported in IE only.
8	plugins	returns the plugins. It is supported in Netscape and Firefox only.
9	systemLanguage	returns the system language. It is supported in IE only.
10	mimeTypes[]	returns the array of mime type. It is supported in Netscape and Firefox only.
11	platform	returns the platform e.g. Win32.
12	online	returns true if browser is online otherwise false.
Methods of JavaScript navigator object
The methods of navigator object are given below.

No.	Method	Description
1	javaEnabled()	checks if java is enabled.
2	taintEnabled()	checks if taint is enabled. It is deprecated since JavaScript 1.2.
Example of navigator object
Let’s see the different usage of history object.

<script>  
document.writeln("<br/>navigator.appCodeName: "+navigator.appCodeName);  
document.writeln("<br/>navigator.appName: "+navigator.appName);  
document.writeln("<br/>navigator.appVersion: "+navigator.appVersion);  
document.writeln("<br/>navigator.cookieEnabled: "+navigator.cookieEnabled);  
document.writeln("<br/>navigator.language: "+navigator.language);  
document.writeln("<br/>navigator.userAgent: "+navigator.userAgent);  
document.writeln("<br/>navigator.platform: "+navigator.platform);  
document.writeln("<br/>navigator.onLine: "+navigator.onLine);  
</script>  

*/