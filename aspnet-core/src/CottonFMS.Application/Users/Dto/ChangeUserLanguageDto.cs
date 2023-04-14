using System.ComponentModel.DataAnnotations;

namespace CottonFMS.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}