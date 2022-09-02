a=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
num=Number(prompt("enter a numer"))

for(i=0;i<(num-1);i++){
    for(j=0;j<num;j++){
        if((i+j)==(num-1)){
            for(s=0;s<=i;s++){
                document.write(a[s])
            }
            for(s=(i-1);s>=0;s--){
                document.write(a[s])
            }
        }
        else{
            document.write("&nbsp;")
            document.write("&nbsp;")
            document.write("&nbsp;")
        }
    }
    document.write('<br/>')
}


for(i=0;i<num;i++){
    for(j=0;j<num;j++){
        if(i==j){
            for(s=0;s<=(num-1-i);s++){
                document.write(a[s])
            }
            for(s=(num-2-i);s>=0;s--){
                document.write(a[s])
            }
        }
        else{
            document.write("&nbsp;")
            document.write("&nbsp;")
            document.write("&nbsp;")
        }
    }
    document.write('<br/>')
}
