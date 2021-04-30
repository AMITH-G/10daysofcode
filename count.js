//counting number of vowels and consonants in the string

function counting(str)
{
    if(str.length!=0)
    {
        var vowel=0;
        for(var i=0,j=str.length-1;i<=j;i++,j--)
        {       
                if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
                    vowel++;
                if(str[j]=='a'|| str[j]=='e'|| str[j]=='i'|| str[j]=='o'|| str[j]=='u')
                    vowel++;                  
        }
    
        console.log(`Number of Vowels = ${vowel}`);
        console.log(`Number of Consonants = ${str.length-vowel}`);
    }
    else
    console.log('Please enter valid string');
}
counting("welcome");