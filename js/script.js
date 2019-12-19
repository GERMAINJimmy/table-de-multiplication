const L = prompt("saisissez la table de multiplication");
var resultat;

resultat = "<tr><th>X</th>";
for (i=0; i<=L; i++)
    {
        resultat += "<th>"+i+"</th>";
    }
resultat += "</tr>";

for (i=0; i<=L; i++)
    {
     if(i % 2 == 0)
         {
             resultat += "<tr style='background-color: grey;'><th>"+i+"</th>";
         }
     else
         {
                resultat += "<tr><th>"+i+"</th>";   
         }
     
        for (j=0;j<=L;j++)
         {
                if(i == j)
                 {
                        resultat += "<td style='background-color: blue;'>"+i*j+"</td>";
                    }
                else
                    {
                        resultat += "<td>"+i*j+"</td>";
                    }
            }
        resultat += "</tr>";
    }
document.write(resultat);