using LessWebStore.Debugging;

namespace LessWebStore
{
    public class LessWebStoreConsts
    {
        public const string LocalizationSourceName = "LessWebStore";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "f41b885b39914ba1b913ed97c4e63631";
    }
}
