
DocxGen=require('docxtemplater'); //Only for Node Usage

new DocxGen().loadFromFile("template.docx",{async:true}).success(function(doc){
        doc.setTags({
          "title": "Trending Cyber",
          "article": [
          {
            "title": "Trending Malware",
            "subtitle": "Based on the list Malware1. Showing the 10 hottest entities out of 467.",
            "table": [
            {
              "list": [
              {
                "description": "Crossrider Trojan",
                "type": "Keyphrase",
                "vol1": "26",
                "vol7": "26"
              },
              {
                "description": "Kazy Trojan",
                "type": "Keyphrase",
                "vol1": "22",
                "vol7": "22"

              },
              {
                "description": "BroBot Trojan",
                "type": "Keyphrase",
                "vol1": "20",
                "vol7": "18"

              },
              {
                "description": "Gauss Trojan",
                "type": "Keyphrase",
                "vol1": "17",
                "vol7": "10"

              },
              {
                "description": "ChewBacca Malware",
                "type": "Keyphrase",
                "vol1": "16",
                "vol7": "9"

              },
              {
                "description": "FakeToken",
                "type": "Keyphrase",
                "vol1": "2",
                "vol7": "4"

              },
              {
                "description": "Soraya Malware",
                "type": "Keyphrase",
                "vol1": "1",
                "vol7": "1"
              }
              ]
            }
            ]
          },
          {
            "title": "Trending Malware",
            "subtitle": "Based on the list Malware1. Showing the 10 hottest entities out of 467.",
            "table": [
            {
              "list": [
              {
                "description": "Crossrider Trojan",
                "type": "Keyphrase",
                "vol1": "26",
                "vol7": "26"
              },
              {
                "description": "Kazy Trojan",
                "type": "Keyphrase",
                "vol1": "22",
                "vol7": "22"

              },
              {
                "description": "BroBot Trojan",
                "type": "Keyphrase",
                "vol1": "20",
                "vol7": "18"

              },
              {
                "description": "Gauss Trojan",
                "type": "Keyphrase",
                "vol1": "17",
                "vol7": "10"

              },
              {
                "description": "ChewBacca Malware",
                "type": "Keyphrase",
                "vol1": "16",
                "vol7": "9"

              },
              {
                "description": "FakeToken",
                "type": "Keyphrase",
                "vol1": "2",
                "vol7": "4"

              },
              {
                "description": "Soraya Malware",
                "type": "Keyphrase",
                "vol1": "1",
                "vol7": "1"
              }
              ]
            }
            ]
          }
          ],
          "hight": [true],
          "pic": "1",
          "family": [
            {"member": "Hamed"},
            {"member": "Sherry"},
            {"member": "Hamed"},
            {"member": "Sherry"},
            {"member": "Hamed"},
            {"member": "Sherry"},
            {"member": "Hamed"},
            {"member": "Sherry"},
            {"member": "Hamed"},
            {"member": "Sherry"},
            {"member": "Hamed"},
            {"member": "Sherry"},
            {"member": "Hamed"},
            {"member": "Sherry"}
          ]
        }) //set the templateVariables
        doc.applyTags() //apply them (replace all occurences of {first_name} by Hamed, ...)
        doc.output() //Output the document using Data-URI
});
