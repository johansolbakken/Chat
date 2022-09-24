using System.ComponentModel.DataAnnotations;

namespace UserApi.Models
{
    public class UserModel {
        [Required]
        public long Id { get; set; }
        [Required]
        [MinLength(1)]
        public string? FirstName { get; set; }

        [Required]
        [MinLength(1)]
        public string? LastName { get; set; }

        [Required]
        [MinLength(1)]
        public string? Email { get; set; }

    }
}