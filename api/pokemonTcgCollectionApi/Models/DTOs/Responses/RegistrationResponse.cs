using pokemonTcgCollectionApi.Domain;

namespace pokemonTcgCollectionApi.Models.DTOs.Responses
{
    public class RegistrationResponse : AutResult
    {
        public bool Success { get; set; }
    }
}