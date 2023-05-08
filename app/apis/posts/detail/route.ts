import { NextResponse } from 'next/server';
 
export async function GET() {
  const res = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data: getData() })
    }, 100)
  });
  const data = await res;
 
  return NextResponse.json({ data });
}

function getData() {
  return {
    schemaJson: {
      "metadata": {
        "version": "1.0"
      },
      "schema": {
        "component": "Page",
        "interface": {
          "decorator": "Wrapper",
          "decoratorProps": {
            "isPage": true
          },
          "forceUpdate": false,
          "props": {
            "style": {
              "backgroundColor": "#e7ffe8",
              "paddingBottom": "1.5rem",
              "paddingTop": "0.76rem"
            }
          }
        },
        "children": {
          "Layout_r8q3sd": {
            "component": "Layout",
            "isForm": false,
            "interface": {
              "decorator": "Wrapper",
              "decoratorProps": {
                "isPage": false,
                "isFormItem": false
              },
              "forceUpdate": false,
              "props": {
                "fixBottom": true,
                "style": {
                  "width": "3.6rem",
                  "paddingLeft": "0.08rem",
                  "paddingRight": "0.08rem",
                  "paddingTop": "0.2rem",
                  "paddingBottom": "0.48rem"
                },
                "backgroundColor": "#ffffff",
                "disabledBackgroundColor": "rgba(255, 255, 255, 0.65)",
                "justifyContent": "center"
              }
            },
            "children": {
              "Button_eucfur": {
                "component": "Button",
                "isForm": false,
                "interface": {
                  "decorator": "Wrapper",
                  "decoratorProps": {
                    "isPage": false,
                    "isFormItem": false
                  },
                  "forceUpdate": false,
                  "props": {
                    "backgroundImage": "",
                    "style": {
                      "width": "3.2rem",
                      "height": "0.52rem",
                      "backgroundColor": "#000000",
                      "fontSize": "0.16rem",
                      "borderRadius": "0.26rem"
                    },
                    "text": "Got It"
                  }
                },
                "actions": {
                  "Click": {
                    "type": "linkToAction",
                    "inputs": {
                      "uri": "https://www.baidu.com",
                      "target": "same"
                    }
                  }
                },
                "triggers": {
                  "Click": {
                    "type": "Click",
                    "action": {
                      "$ref": "#/Layout_r8q3sd/Button_eucfur/actions/Click"
                    }
                  }
                }
              }
            }
          }
        },
        "actions": {
          "shareAction": {
            "type": "shareAction",
            "inputs": {
              "shareContentsMap": {},
              "sharePanelTitle": "",
              "shareUrl": ""
            },
            "inject": {
              "injectCallbackData": true,
              "target": "/"
            }
          }
        }
      }
    },
    "components": ["Image", "Layout", "Button"],
  }
}