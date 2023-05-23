import {ElasticEmail} from '@elasticemail/elasticemail-client';
export const actions = {
    default: async (event) => {
        // TODO log the user in
        console.log()
        var knock="E92FE5B08B95DFB9748DF0281CA36F593EFA9F4EBF26BD0FF8FC9FA01AB2F2DAFEE43904549653C4DBB4C61ECCEF48D5";

        let email = {
            "Recipients": [
              {
                "Email": "mail@example.com",
                "Fields": {
                  "city": "New York",
                  "age": "34"
                }
              }
            ],
            "Content": {
              "Body": [
                {
                  "ContentType": "HTML",
                  "Content": "string",
                  "Charset": "string"
                }
              ],
              "Merge": {
                "city": "New York",
                "age": "34"
              },
              "Attachments": [
                {
                  "BinaryContent": "string",
                  "Name": "string",
                  "ContentType": "string",
                  "Size": "100"
                }
              ],
              "Headers": {
                "city": "New York",
                "age": "34"
              },
              "Postback": "string",
              "EnvelopeFrom": "John Doe <email@domain.com>",
              "From": "John Doe <email@domain.com>",
              "ReplyTo": "John Doe <email@domain.com>",
              "Subject": "Hello!",
              "TemplateName": "Template01",
              "AttachFiles": "[ \"preuploaded.jpg\" ]",
              "Utm": {
                "Source": "string",
                "Medium": "string",
                "Campaign": "string",
                "Content": "string"
              }
            },
            "Options": {
              "TimeOffset": null,
              "PoolName": "My Custom Pool",
              "ChannelName": "Channel01",
              "Encoding": "UserProvided",
              "TrackOpens": "true",
              "TrackClicks": "true"
            }
          }

        fetch('https://api.elasticemail.com/v4/emails', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-ElasticEmail-ApiKey': knock

        },

        
        body: JSON.stringify(email)
        }).then(res => res.json())
        .then(res => console.log(res));
    
    }
    
};