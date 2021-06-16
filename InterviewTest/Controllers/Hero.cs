using System.Collections.Generic;

namespace InterviewTest.Controllers
{
    public class Hero : IHero
    {
        public string name { get; set; }
        public string power { get; set; }
        public List<KeyValuePair<string, int>> stats { get; set; }
        public void evolve(int statIncrease = 5)
        {
            for (int x = 0; x < stats.Count; x++)
            {
                KeyValuePair<string, int> genStat =
                    new KeyValuePair<string, int>(stats[x].Key, stats[x].Value + (stats[x].Value / 2));

                stats[x] = genStat;
            }
        }
    }
}
