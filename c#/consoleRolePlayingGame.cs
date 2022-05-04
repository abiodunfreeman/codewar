/* https://docs.microsoft.com/en-us/learn/modules/csharp-do-while/3-challenge

   Just thought it was a fun little exercise.
*/
int hero = 10;
int monst = 10;
int round = 1;
Random attack = new Random();
do 
{
    Console.WriteLine($"*** Round {round} ***");
    round++;
int hAtk = attack.Next(11);
int mAtk = attack.Next(11);

Console.WriteLine($"The hero attacks the monster for {hAtk} damage!");
monst -= hAtk;

if (monst > 0)
{
    Console.WriteLine($"The monster strikes back for {mAtk} damage!");
    hero -= mAtk;
}
Console.WriteLine($"! Remaining Health !\nHero-{hero}\t:\tMonster-{monst}");
}while (hero > 0 && monst > 0);