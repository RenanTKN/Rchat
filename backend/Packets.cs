using System;
using System.Text.Json.Serialization;

namespace ReactAspNetCoreSignalR
{
    public class MessagePacket
    {
        public MessagePacket(string username, string message)
        {
            this.username = username;
            this.message = message;
        }

        [JsonPropertyName("username")]
        public string username { get; set; }
        [JsonPropertyName("message")]
        public string message { get; set; }
        [JsonPropertyName("datetime")]
        public DateTime datetime { get; set; } = DateTime.Now;
        [JsonPropertyName("type")]
        public string type { get; set; } = "message";
    }

    public class LoggedInPacket
    {
        public LoggedInPacket(string username)
        {
            this.username = username;
        }

        [JsonPropertyName("username")]
        public string username { get; set; }
        [JsonPropertyName("type")]
        public string type { get; set; } = "loggedIn";
    }
}