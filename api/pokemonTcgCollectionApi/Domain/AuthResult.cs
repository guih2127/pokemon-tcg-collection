using System.Collections.Generic;

namespace pokemonTcgCollectionApi.Domain
{
    public class AutResult
    {
        public string Token { get; set; }
        public bool Result { get; set; }
        public List<string> Errors { get; set; }
    }
}