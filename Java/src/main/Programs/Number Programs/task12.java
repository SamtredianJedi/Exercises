// Java Program Number to Word



In this section, we will create a Java program that converts the given number into words. For example, if the given number is 54,297 then the output should be Fifty-Four Thousand Two Hundred Ninety-Seven. Let's create a Java program for the same.

NumberToWordExample1.java

class NumberToWordExample1   
{  
//user-defined static method that converts a number into words  
static void numberToWords(char num[])  
{  
//determines the number of digits in the given number  
int len = num.length;  
//checks the given number has number or not  
if (len == 0)   
{  
//if the given number is empty prints the following statement     
System.out.println("The string is empty.");  
return;  
}  
//here, we have specified the length of the number to 4  
//it means that the number (that you want to convert) should be four or less than four digits  
if (len > 4)   
{  
//if the given number is more than four-digit number, it prints the following statement    
System.out.println("\n The given number has more than 4 digits.");  
return;  
}  
//string type array for one-digit numbers    
String[] onedigit = new String[] {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};  
//string type array for two digits numbers    
//the first index is empty because it makes indexing easy   
String[] twodigits = new String[] {"", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};  
//string type array of tens multiples   
//the first two indexes are empty because it makes indexing easy   
String[] multipleoftens = new String[] {"",  "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};  
//string type array of power of tens   
String[] poweroftens = new String[] {"Hundred", "Thousand"};  
//Used for debugging purpose only   
//the valueOf() method returns the string representation of the character array argument  
System.out.print(String.valueOf(num) + ": ");  
//checks whether the length of the given string is one or not  
if (len == 1)   
{  
//if the above condition returns true, it accesses the corresponding index and prints the value of that index  
//[num[0]-'0']: getting the number equal the decimal value of the character (assuming the char is the digit)  
System.out.println(onedigit[num[0]-'0']);  
return;  
}  
int x = 0;  
//executes until num does not become not '\0'  
while (x < num.length)   
{  
//executes if the length of the string is greater than equal to three  
if (len >= 3)   
{  
if (num[x] - '0' != 0)   
{  
System.out.print(onedigit[num[x] - '0'] + " ");  
//here length can be 3 or 4  
System.out.print(poweroftens[len - 3]+ " ");  
}  
//decrements the length of the string by 1  
--len;  
}  
//executes if the given number has two digits  
else   
{  
//the if-statement handles the numbers from 10 to 19 only     
if (num[x] - '0' == 1)   
{  
//adding the digits of the given number   
//the logic behind sum up the digits is that we will use the sum for accessing the index of the array   
//for example: 17, sum of digits = 8  
//we will access the 8th index in twodigits[] array i.e. Seventeen  
int sum = num[x] - '0' + num[x + 1] - '0';  
System.out.println(twodigits[sum]);  
return;  
}  
//the else-if statement handles the number 20 only  
//compares the tens and unit place with 2 and 0 respectively  
else if (num[x] - '0' == 2 && num[x + 1] - '0' == 0)   
{  
//executes if the above else-if condition returns true    
System.out.println("Twenty");  
return;  
}  
//the else block handles the numbers from 21 to 100  
else   
{  
int i = (num[x] - '0');  
if (i > 0)  
//prints the ith index element of the array multipleoftens[]  
System.out.print(multipleoftens[i]+ " ");  
else  
//prints space  
System.out.print("");  
//increments the variable i by 1  
++x;  
//checks whether the number is not equal to zero, it means the number has only a digit  
if (num[x] - '0' != 0)  
//prints the ith index element of the array onedigit[]  
System.out.println(onedigit[num[x] - '0']);  
}  
}  
//increments the variable i by 1  
++x;  
}  
}  
//main() method  
public static void main(String args[])  
{  
//calling the user-defined method and that invokes another predefined method toCharArray()  
//the method toCharArray() converts the given number into character array  
numberToWords("1111".toCharArray());  
numberToWords("673".toCharArray());  
numberToWords("85".toCharArray());  
numberToWords("5".toCharArray());  
numberToWords("0".toCharArray());  
numberToWords("20".toCharArray());  
numberToWords("1000".toCharArray());  
numberToWords("12345".toCharArray());  
//passing empty string   
numberToWords("".toCharArray());  
}  
}  


The number is not limited to four digits. Then what if the user enters more than 5 five digits numbers. The above program does not work for large digit numbers.

Converting Large Numbers into Words
The logic for converting the large digit numbers is quite different. Let's see the approach to convert large digits numbers.

NumberToWordExample2.java

import java.text.DecimalFormat;  
public class NumberToWordExample2   
{  
//string type array for one digit numbers     
private static final String[] twodigits = {"", " Ten", " Twenty", " Thirty", " Forty", " Fifty", " Sixty", " Seventy", " Eighty", " Ninety"};  
//string type array for two digits numbers   
private static final String[] onedigit = {"", " One", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine", " Ten", " Eleven", " Twelve", " Thirteen", " Fourteen", " Fifteen", " Sixteen", " Seventeen", " Eighteen", " Nineteen"};  
//defining constructor of the class  
private NumberToWordExample2()   
{  
}  
//user-defined method that converts a number to words (up to 1000)  
private static String convertUptoThousand(int number)   
{  
String soFar;  
if (number % 100 < 20)  
{  
soFar = onedigit[number % 100];  
number = number/ 100;  
}  
else   
{  
soFar = onedigit[number % 10];  
number = number/ 10;  
soFar = twodigits[number % 10] + soFar;  
number = number/ 10;  
}  
if (number == 0)   
return soFar;  
return onedigit[number] + " Hundred " + soFar;  
}  
//user-defined method that converts a long number (0 to 999999999) to string    
public static String convertNumberToWord(long number)   
{  
//checks whether the number is zero or not  
if (number == 0)   
{   
//if the given number is zero it returns zero  
return "zero";   
}  
//the toString() method returns a String object that represents the specified long  
String num = Long.toString(number);  
//for creating a mask padding with "0"   
String pattern = "000000000000";  
//creates a DecimalFormat using the specified pattern and also provides the symbols for the default locale  
DecimalFormat decimalFormat = new DecimalFormat(pattern);  
//format a number of the DecimalFormat instance  
num = decimalFormat.format(number);  
//format: XXXnnnnnnnnn  
//the subString() method returns a new string that is a substring of this string  
//the substring begins at the specified beginIndex and extends to the character at index endIndex - 1  
//the parseInt() method converts the string into integer  
int billions = Integer.parseInt(num.substring(0,3));  
//format: nnnXXXnnnnnn  
int millions  = Integer.parseInt(num.substring(3,6));  
//format: nnnnnnXXXnnn  
int hundredThousands = Integer.parseInt(num.substring(6,9));  
//format: nnnnnnnnnXXX  
int thousands = Integer.parseInt(num.substring(9,12));  
String tradBillions;  
switch (billions)   
{  
case 0:  
tradBillions = "";  
break;  
case 1 :  
tradBillions = convertUptoThousand(billions)+ " Billion ";  
break;  
default :  
tradBillions = convertUptoThousand(billions)+ " Billion ";  
}  
String result =  tradBillions;  
String tradMillions;  
switch (millions)   
{  
case 0:  
tradMillions = "";  
break;  
case 1 :  
tradMillions = convertUptoThousand(millions)+ " Million ";  
break;  
default :  
tradMillions = convertUptoThousand(millions)+ " Million ";  
}  
result =  result + tradMillions;  
String tradHundredThousands;  
switch (hundredThousands)   
{  
case 0:  
tradHundredThousands = "";  
break;  
case 1 :  
tradHundredThousands = "One Thousand ";  
break;  
default :  
tradHundredThousands = convertUptoThousand(hundredThousands)+ " Thousand ";  
}  
result =  result + tradHundredThousands;  
String tradThousand;  
tradThousand = convertUptoThousand(thousands);  
result =  result + tradThousand;  
//removing extra space if any  
return result.replaceAll("^\\s+", "").replaceAll("\\b\\s{2,}\\b", " ");  
}  
//main() method  
public static void main(String args[])   
{  
//calling the user-defined method that converts the parsed number into words  
System.out.println(convertNumberToWord(2));  
System.out.println(convertNumberToWord(99));  
System.out.println(convertNumberToWord(456));  
System.out.println(convertNumberToWord(1101));  
System.out.println(convertNumberToWord(19812));  
System.out.println(convertNumberToWord(674319));  
System.out.println(convertNumberToWord(909087531));  
System.out.println(convertNumberToWord(1000000000));  
System.out.println(convertNumberToWord(359999999));  
System.out.println(convertNumberToWord(1213000000L));  
System.out.println(convertNumberToWord(1000000));  
System.out.println(convertNumberToWord(1111111111));  
System.out.println(convertNumberToWord(3000200));  
System.out.println(convertNumberToWord(700000));  
System.out.println(convertNumberToWord(9000000));  
}  
}  


Let's create a Java program that converts very long numbers into words.

The following Java program also converts the negative and decimal numbers into words.

NumberToWordExample3.java

import java.util.*;  
public class NumberToWordExample3   
{  
static public class ScaleUnit   
{  
private int exponent;  
private String[] names;  
private ScaleUnit(int exponent, String...names)   
{  
this.exponent = exponent;  
this.names = names;  
}  
public int getExponent()   
{  
return exponent;  
}  
public String getName(int index)   
{  
return names[index];  
}  
}  
static private ScaleUnit[] SCALE_UNITS = new ScaleUnit[]   
{  
new ScaleUnit(63, "vigintillion", "decilliard"),  
new ScaleUnit(60, "novemdecillion", "decillion"),  
new ScaleUnit(57, "octodecillion", "nonilliard"),  
new ScaleUnit(54, "septendecillion", "nonillion"),  
new ScaleUnit(51, "sexdecillion", "octilliard"),  
new ScaleUnit(48, "quindecillion", "octillion"),  
new ScaleUnit(45, "quattuordecillion", "septilliard"),  
new ScaleUnit(42, "tredecillion", "septillion"),  
new ScaleUnit(39, "duodecillion", "sextilliard"),  
new ScaleUnit(36, "undecillion", "sextillion"),  
new ScaleUnit(33, "decillion", "quintilliard"),  
new ScaleUnit(30, "nonillion", "quintillion"),  
new ScaleUnit(27, "octillion", "quadrilliard"),  
new ScaleUnit(24, "septillion", "quadrillion"),  
new ScaleUnit(21, "sextillion", "trilliard"),  
new ScaleUnit(18, "quintillion", "trillion"),  
new ScaleUnit(15, "quadrillion", "billiard"),  
new ScaleUnit(12, "trillion", "billion"),  
new ScaleUnit(9, "billion", "milliard"),  
new ScaleUnit(6, "million", "million"),  
new ScaleUnit(3, "thousand", "thousand"),  
new ScaleUnit(2, "hundred", "hundred"),  
//new ScaleUnit(1, "ten", "ten"),  
//new ScaleUnit(0, "one", "one"),  
new ScaleUnit(-1, "tenth", "tenth"),  
new ScaleUnit(-2, "hundredth", "hundredth"),  
new ScaleUnit(-3, "thousandth", "thousandth"),  
new ScaleUnit(-4, "ten-thousandth", "ten-thousandth"),  
new ScaleUnit(-5, "hundred-thousandth", "hundred-thousandth"),  
new ScaleUnit(-6, "millionth", "millionth"),  
new ScaleUnit(-7, "ten-millionth", "ten-millionth"),  
new ScaleUnit(-8, "hundred-millionth", "hundred-millionth"),  
new ScaleUnit(-9, "billionth", "milliardth"),  
new ScaleUnit(-10, "ten-billionth", "ten-milliardth"),  
new ScaleUnit(-11, "hundred-billionth", "hundred-milliardth"),  
new ScaleUnit(-12, "trillionth", "billionth"),  
new ScaleUnit(-13, "ten-trillionth", "ten-billionth"),  
new ScaleUnit(-14, "hundred-trillionth", "hundred-billionth"),  
new ScaleUnit(-15, "quadrillionth", "billiardth"),  
new ScaleUnit(-16, "ten-quadrillionth", "ten-billiardth"),  
new ScaleUnit(-17, "hundred-quadrillionth", "hundred-billiardth"),  
new ScaleUnit(-18, "quintillionth", "trillionth"),  
new ScaleUnit(-19, "ten-quintillionth", "ten-trillionth"),  
new ScaleUnit(-20, "hundred-quintillionth", "hundred-trillionth"),  
new ScaleUnit(-21, "sextillionth", "trilliardth"),  
new ScaleUnit(-22, "ten-sextillionth", "ten-trilliardth"),  
new ScaleUnit(-23, "hundred-sextillionth", "hundred-trilliardth"),  
new ScaleUnit(-24, "septillionth","quadrillionth"),  
new ScaleUnit(-25, "ten-septillionth","ten-quadrillionth"),  
new ScaleUnit(-26, "hundred-septillionth","hundred-quadrillionth"),  
};  
static public enum Scale   
{  
SHORT,  
LONG;  
public String getName(int exponent)   
{  
for (ScaleUnit unit : SCALE_UNITS)   
{  
if (unit.getExponent() == exponent)   
{  
return unit.getName(this.ordinal());  
}  
}  
return "";   
}  
}  
/** 
* Change this scale to support American and modern British value (short scale) 
* or Traditional British value (long scale) 
*/  
static public Scale SCALE = Scale.SHORT;   
static abstract public class AbstractProcessor   
{  
static protected final String SEPARATOR = " ";  
static protected final int NO_VALUE = -1;  
protected List<Integer> getDigits(long value)   
{  
ArrayList<Integer> digits = new ArrayList<Integer>();  
if (value == 0)  
{  
digits.add(0);  
}   
else   
{  
while (value > 0)   
{  
digits.add(0, (int) value % 10);  
value /= 10;  
}  
}  
return digits;  
}  
public String getName(long value)   
{  
return getName(Long.toString(value));  
}  
public String getName(double value)   
{  
return getName(Double.toString(value));  
}  
abstract public String getName(String value);  
}  
static public class UnitProcessor extends AbstractProcessor   
{  
static private final String[] TOKENS = new String[]   
{  
"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"  
};  
@Override  
public String getName(String value)   
{  
StringBuilder buffer = new StringBuilder();  
int offset = NO_VALUE;  
int number;  
if (value.length() > 3)   
{  
number = Integer.valueOf(value.substring(value.length() - 3), 10);  
}   
else   
{  
number = Integer.valueOf(value, 10);  
}  
number %= 100;  
if (number < 10)   
{  
offset = (number % 10) - 1;  
//number /= 10;  
}   
else if (number < 20)   
{  
offset = (number % 20) - 1;  
//number /= 100;  
}  
if (offset != NO_VALUE && offset < TOKENS.length)   
{  
buffer.append(TOKENS[offset]);  
}  
return buffer.toString();  
}  
}  
static public class TensProcessor extends AbstractProcessor   
{  
static private final String[] TOKENS = new String[]   
{  
"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"  
};  
static private final String UNION_SEPARATOR = "-";  
private UnitProcessor unitProcessor = new UnitProcessor();  
@Override  
public String getName(String value)   
{  
StringBuilder buffer = new StringBuilder();  
boolean tensFound = false;  
int number;  
if (value.length() > 3)   
{  
number = Integer.valueOf(value.substring(value.length() - 3), 10);  
}   
else   
{  
number = Integer.valueOf(value, 10);  
}  
number %= 100;   // keep only two digits  
if (number >= 20)   
{  
buffer.append(TOKENS[(number / 10) - 2]);  
number %= 10;  
tensFound = true;  
}  
else   
{  
number %= 20;  
}  
if (number != 0)   
{  
if (tensFound)   
{  
buffer.append(UNION_SEPARATOR);  
}  
buffer.append(unitProcessor.getName(number));  
}  
return buffer.toString();  
}  
}  
static public class HundredProcessor extends AbstractProcessor   
{  
private int EXPONENT = 2;  
private UnitProcessor unitProcessor = new UnitProcessor();  
private TensProcessor tensProcessor = new TensProcessor();  
@Override  
public String getName(String value)   
{  
StringBuilder buffer = new StringBuilder();  
int number;  
if (value.isEmpty())   
{  
number = 0;  
}   
else if (value.length() > 4)   
{  
number = Integer.valueOf(value.substring(value.length() - 4), 10);  
}  
else   
{  
number = Integer.valueOf(value, 10);  
}  
number %= 1000;  // keep at least three digits  
if (number >= 100)   
{  
buffer.append(unitProcessor.getName(number / 100));  
buffer.append(SEPARATOR);  
buffer.append(SCALE.getName(EXPONENT));  
}  
String tensName = tensProcessor.getName(number % 100);  
if (!tensName.isEmpty() && (number >= 100))   
{  
buffer.append(SEPARATOR);  
}  
buffer.append(tensName);  
return buffer.toString();  
}  
}  
static public class CompositeBigProcessor extends AbstractProcessor   
{  
private HundredProcessor hundredProcessor = new HundredProcessor();  
private AbstractProcessor lowProcessor;  
private int exponent;  
public CompositeBigProcessor(int exponent)   
{  
if (exponent <= 3)   
{  
lowProcessor = hundredProcessor;  
}   
else   
{  
lowProcessor = new CompositeBigProcessor(exponent - 3);  
}  
this.exponent = exponent;  
}  
public String getToken()   
{  
return SCALE.getName(getPartDivider());  
}  
protected AbstractProcessor getHighProcessor()   
{  
return hundredProcessor;  
}  
protected AbstractProcessor getLowProcessor()   
{  
return lowProcessor;  
}  
public int getPartDivider()   
{  
return exponent;  
}  
@Override  
public String getName(String value)   
{  
StringBuilder buffer = new StringBuilder();  
String high, low;  
if (value.length() < getPartDivider())   
{  
high = "";  
low = value;  
}   
else   
{  
int index = value.length() - getPartDivider();  
high = value.substring(0, index);  
low = value.substring(index);  
}  
String highName = getHighProcessor().getName(high);  
String lowName = getLowProcessor().getName(low);  
if (!highName.isEmpty())   
{  
buffer.append(highName);  
buffer.append(SEPARATOR);  
buffer.append(getToken());  
if (!lowName.isEmpty())   
{  
buffer.append(SEPARATOR);  
}  
}  
if (!lowName.isEmpty())   
{  
buffer.append(lowName);  
}  
return buffer.toString();  
}  
}  
static public class DefaultProcessor extends AbstractProcessor   
{  
static private String MINUS = "minus";  
static private String UNION_AND = "and";  
static private String ZERO_TOKEN = "zero";  
private AbstractProcessor processor = new CompositeBigProcessor(63);  
@Override  
public String getName(String value)   
{  
boolean negative = false;  
if (value.startsWith("-"))   
{  
negative = true;  
value = value.substring(1);  
}  
int decimals = value.indexOf(".");  
String decimalValue = null;  
if (0 <= decimals)   
{  
decimalValue = value.substring(decimals + 1);  
value = value.substring(0, decimals);  
}  
String name = processor.getName(value);  
if (name.isEmpty())   
{  
name = ZERO_TOKEN;  
}   
else if (negative)   
{  
name = MINUS.concat(SEPARATOR).concat(name);   
}  
if (!(null == decimalValue || decimalValue.isEmpty()))   
{  
name = name.concat(SEPARATOR).concat(UNION_AND).concat(SEPARATOR)  
.concat(processor.getName(decimalValue)).concat(SEPARATOR).concat(SCALE.getName(-decimalValue.length()));  
}  
return name;  
}  
}  
static public AbstractProcessor processor;  
public static void main(String...args)   
{  
processor = new DefaultProcessor();  
long[] values = new long[]   
{            0,4,10,12,100,108,299,1000,1003,2040,45213,100000,100005,100010,202020,202022,999999,1000000,1000001,10000000,10000007,99999999,  
Long.MAX_VALUE,  
Long.MIN_VALUE  
};  
String[] strValues = new String[]   
{  
"0001.2","3.141592"  
};  
for (long val : values)   
{  
System.out.println(val + " = " + processor.getName(val) );  
}  
for (String strVal : strValues)   
{  
System.out.println(strVal + " = " + processor.getName(strVal) );  
}  
//generates a very large number  
StringBuilder bigNumber = new StringBuilder();  
for (int d=0; d<66; d++)   
{  
bigNumber.append( (char) ((Math.random() * 10) + '0'));  
}  
bigNumber.append(".");  
for (int d=0; d<26; d++)   
{  
bigNumber.append( (char) ((Math.random() * 10) + '0'));  
}  
System.out.println(bigNumber.toString() + " = " + processor.getName(bigNumber.toString()));  
}  
}  

