using System.Collections.Generic;
using pitchfork.webapi.Models;

namespace pitchfork.webapi.Services
{
    public interface ISNIService
    {
        IEnumerable<Department> GetDepartments();
    }

    public class SniService : ISNIService
    {
        public  IEnumerable<Department> GetDepartments()
        {
            var departments = new List<Department>
            {
                new Department
                {
                    DepartmentId = "A",
                    Activity = "Jordbruk, skogsbruk och fiske",
                    Industry = "Företag inom jordbruk, skogsbruk och fiske",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "B",
                    Activity = "Utvinning av mineral",
                    Industry = "Gruvor och mineralutvinningsindustri",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "C",
                    Activity = "Tillverkning",
                    Industry = "Tillverkningsindustri",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "D",
                    Activity = "Försörjning av el, gas, värme och kyla",
                    Industry = "El-, gas- och värmeverk",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "E",
                    Activity = "Vattenförsörjning; avloppsrening, avfallshantering och sanering",
                    Industry = "Vattenverk; reningsverk o.d., avfallsanläggningar",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "F",
                    Activity = "Byggverksamhet",
                    Industry = "Byggindustri",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "G",
                    Activity = "Handel; reparation av motorfordon och motorcyklar",
                    Industry = "Handel; serviceverkstäder för motorfordon och motorcyklar",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "H",
                    Activity = "Transport och magasinering",
                    Industry = "Transport- och magasineringsföretag",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "I",
                    Activity = "Hotell- och restaurangverksamhet",
                    Industry = "Hotell och restauranger",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "J",
                    Activity = "Informations- och kommunikationsverksamhet",
                    Industry = "Informations- och kommunikationsföretag",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "K",
                    Activity = "Finans- och försäkringsverksamhet",
                    Industry = "Kreditinstitut och försäkringsbolag",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "L",
                    Activity = "Fastighetsverksamhet",
                    Industry = "Fastighetsbolag och fastighetsförvaltare",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "M",
                    Activity = "Verksamhet inom juridik, ekonomi, vetenskap och teknik",
                    Industry = "Företag inom juridik, ekonomi, vetenskap och teknik",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "N",
                    Activity = "Uthyrning, fastighetsservice, resetjänster och andra stödtjänster",
                    Industry = "Företag inom uthyrning, fastighetsservice, resetjänster och andra stödtjänster",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "O",
                    Activity = "Offentlig förvaltning och försvar; obligatorisk socialförsäkring",
                    Industry = "Civila myndigheter och försvaret",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "P",
                    Activity = "Utbildning",
                    Industry = "Utbildningsväsende",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "Q",
                    Activity = "Vård och omsorg; sociala tjänster",
                    Industry = "Enheter för vård och omsorg, socialtjänst",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "R",
                    Activity = "Kultur, nöje och fritid",
                    Industry = "Enheter för kultur, nöje och fritid",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "S",
                    Activity = "Annan serviceverksamhet",
                    Industry = "Andra serviceföretag",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "T",
                    Activity = "Förvärvsarbete i hushåll; hushållens produktion av diverse varor och tjänster för eget bruk",
                    Industry = "Förvärvsarbete i hushåll; Hushållsproducenter av diverse varor och tjänster för eget bruk",
                    Standard = "SNI2007"
                },
                new Department
                {
                    DepartmentId = "U",
                    Activity = "Verksamhet vid internationella organisationer, utländska ambassader o.d.",
                    Industry = "Internationella organisationer, utländska ambassader o.d.",
                    Standard = "SNI2007"
                }
            };

            return departments;
        }
    }
}
