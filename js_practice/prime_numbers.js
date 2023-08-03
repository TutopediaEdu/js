let pn=[];
let tpn=[];
for(i=2;i<=100;i++)
{
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            break;
        }
    }
    if(j==i)
    {
        pn.push(i);
        if(pn.length>1)
        {
            if(pn[pn.length-1]-pn[pn.length-2]==2)
            {
                
                if(tpn.includes(pn[pn.length-2]))
                {
                    null;
                }
                else {
                    tpn.push(pn[pn.length-2]);
                }
                
                if(tpn.includes(pn[pn.length-1]))
                {
                    null;
                }
                else {
                    tpn.push(pn[pn.length-1]);
                }

            }
        }
        
    }
}
console.log("There are "+pn.length+" prime numbers between 2 and 100, these are: "+pn);
console.log("There are "+tpn.length+" twin prime numbers between 2 and 100, these are: "+tpn);
