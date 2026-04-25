import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";

import { PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

import { useRef } from "react";

export default function About() {
  const { height, width } = useWindowDimensions();

  const scrollRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (scrollRef.current && ref.current) {
      const topOffset = ref.current.offsetTop;

      scrollRef.current.scrollTo({
        y: topOffset,
        animated: true,
      });
    }
  };

  const visible = width > 800;

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    PlayfairDisplay_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      {/* Navigation bar */}
      {visible && (
        <View
          style={{
            position: "absolute",
            maxWidth: 800,
            flexWrap: "wrap",
            zIndex: 10,
            alignItems: "center",
            marginTop: 40,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 20,
            gap: 20,
            width: "95%",
            borderRadius: 99,
            borderColor: "#ececece0",
            borderWidth: 2,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(2px)",
            opacity: 0.95,
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./assets/Liminal logo2.png")}
              style={{ width: 75, height: 20, resizeMode: "contain" }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => scrollToSection(aboutRef)}>
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 14,
                  color: "#000000",
                }}
              >
                About
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => scrollToSection(servicesRef)}>
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 14,
                  color: "#000000",
                }}
              >
                Services
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 14,
                  color: "#000000",
                }}
              >
                Case Studies
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 14,
                  color: "#000000",
                }}
              >
                Resources
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => scrollToSection(contactRef)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 99,
              marginRight: -10,
              backgroundColor: "#ff5252",
              gap: 5,
              shadowColor: "#ff5252",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "500",
                letterSpacing: 0.3,
                lineHeight: 16,
              }}
            >
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {/* ABOUT SECTION */}
        <View
          ref={aboutRef}
          style={{
            width: "100%",
            minHeight: 920,
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: 40,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              source={require("./assets/meeting9.png")}
              resizeMode="cover"
            />

            {/* Intro text*/}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 40,
                  letterSpacing: 0.3,
                  color: "#ff5252",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Strategic Fundraising Support
              </Text>

              <Text
                style={{
                  fontFamily: "PlayfairDisplay_400Regular",
                  fontStyle: "italic",
                  fontWeight: "500",
                  fontSize: 40,
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                for local charities
              </Text>

              <Text
                style={{
                  fontFamily: "Inter_400Regular",
                  marginTop: 40,
                  color: "#444444",
                  fontSize: 20,
                  textAlign: "center",
                  lineHeight: 30,
                }}
              >
                I help local charities {""}
                <Text
                  style={{ fontFamily: "Inter_600SemiBold", color: "#ff5252" }}
                >
                  strengthen their fundraising
                </Text>
                ,{"\n"}
                build
                <Text style={{ fontWeight: "bold", color: "#000000" }}>
                  {" "}
                  sustainable income{" "}
                </Text>
                and create {"\n"}
                <Text style={{ fontStyle: "italic", color: "#d32f2f" }}>
                  long-term impact{" "}
                </Text>
                for the people they support.
              </Text>

              <View
                style={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 40,
                }}
              >
                <TouchableOpacity
                  onPress={() => scrollToSection(contactRef)}
                  style={{
                    paddingHorizontal: 35,
                    paddingVertical: 20,
                    backgroundColor: "#ff5252",
                    borderRadius: 99,
                    shadowColor: "#ff5252",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                    opacity: 0.9,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "#ffffff",
                    }}
                  >
                    Book a free discovery call
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => scrollToSection(servicesRef)}
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: 99,
                    borderWidth: 3,
                    borderColor: "rgb(0, 0, 0)",
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "#000000",
                    }}
                  >
                    View services
                  </Text>

                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={24}
                    color="#000000"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* SERVICES SECTION */}
        <View
          ref={servicesRef}
          style={{
            minHeight: 750,
            width: "100%",
            backgroundColor: "white",
            paddingVertical: 20,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: 40,
              overflow: "hidden",
              paddingVertical: 40,
            }}
          >
            <Image
              source={require("./assets/aesthetic backgroundv2.png")}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                opacity: 0.5,
              }}
            />

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("./assets/gradient.png")}
                style={{
                  width: 250,
                  height: 70,
                  position: "absolute",
                  borderRadius: 15,
                  opacity: 0.2,
                }}
              />

              <Text style={{ fontSize: 50, fontFamily: "Inter_600SemiBold" }}>
                Services
              </Text>
            </View>

            <Text
              style={{
                fontSize: 20,
                marginTop: 40,
                fontFamily: "Inter_400Regular",
                color: "#494949",
                textAlign: "center",
                paddingHorizontal: 20,
              }}
            >
              {" "}
              I provide clear,{" "}
              <Text
                style={{ color: "#ff5252", fontFamily: "Inter_600SemiBold" }}
              >
                practical fundraising support
              </Text>{" "}
              for charities and community organisations. {"\n"}My work helps
              teams focus their{" "}
              <Text
                style={{ color: "#ff5252", fontFamily: "Inter_600SemiBold" }}
              >
                time,
              </Text>
              <Text> build</Text>
              <Text> confidence </Text>
              and
              <Text
                style={{ color: "#ff5252", fontFamily: "Inter_600SemiBold" }}
              >
                {" "}
                secure{" "}
              </Text>
              the funding they need.
            </Text>

            {/* Service Boxes Container */}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
                width: "100%",
              }}
            >
              {/* Pipeline Audit */}
              <View
                style={{
                  width: "90%",
                  maxWidth: 340,
                  height: 350,
                  backgroundColor: "#ffffff",
                  borderRadius: 30,
                  padding: 30,
                  shadowColor: "#000000",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  justifyContent: "center",
                  opacity: 0.8,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <MaterialCommunityIcons
                    name="magnify-scan"
                    size={40}
                    color="#ff5252"
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    color: "#000000",
                    fontSize: 25,
                  }}
                >
                  Pipeline Audit
                </Text>
                <Text
                  style={{
                    color: "#7a7a7a",
                    marginTop: 10,
                    fontFamily: "Inter_400Regular",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Focus on opportunities that are most likely to succeed.
                </Text>
              </View>

              {/* High-Value Bidding */}
              <View
                style={{
                  width: "90%",
                  maxWidth: 340,
                  height: 350,
                  backgroundColor: "#ffffff",
                  borderRadius: 30,
                  padding: 30,
                  shadowColor: "#000000",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  justifyContent: "center",
                  opacity: 0.8,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <FontAwesome5
                    name="hand-holding-usd"
                    size={40}
                    color="#ff5252"
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    color: "#000000",
                    fontSize: 25,
                  }}
                >
                  High-Value Bidding
                </Text>
                <Text
                  style={{
                    color: "#7a7a7a",
                    marginTop: 10,
                    fontFamily: "Inter_400Regular",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Turn your strategy into strong, fundable proposals.
                </Text>
              </View>

              {/* Change and Project Management */}
              <View
                style={{
                  width: "90%",
                  maxWidth: 340,
                  height: 350,
                  backgroundColor: "#ffffff",
                  borderRadius: 30,
                  padding: 30,
                  shadowColor: "#000000",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  justifyContent: "center",
                  opacity: 0.8,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <MaterialCommunityIcons
                    name="update"
                    size={40}
                    color="#ff5252"
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    color: "#000000",
                    fontSize: 25,
                  }}
                >
                  Change and Project Management
                </Text>
                <Text
                  style={{
                    color: "#7a7a7a",
                    marginTop: 10,
                    fontFamily: "Inter_400Regular",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Plan and deliver work with clarity.
                </Text>
              </View>

              {/* Bespoke Stewardship */}
              <View
                style={{
                  width: "90%",
                  maxWidth: 340,
                  height: 350,
                  backgroundColor: "#ffffff",
                  borderRadius: 30,
                  padding: 30,
                  shadowColor: "#000000",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  opacity: 0.8,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    backgroundColor: "#ffffff",
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="shield-star"
                    size={40}
                    color="#ff5252"
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    color: "#000000",
                    fontSize: 25,
                  }}
                >
                  Bespoke Stewardship
                </Text>
                <Text
                  style={{
                    color: "#7a7a7a",
                    marginTop: 10,
                    fontFamily: "Inter_400Regular",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Build long-term donor relationships.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          ref={contactRef}
          style={{
            minHeight: 800,
            backgroundColor: "white",
            paddingVertical: 40,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 50,
              textAlign: "center",
            }}
          >
            Contact me
          </Text>

          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontFamily: "Inter_600SemiBold",
              color: "#494949",
              textAlign: "center",
            }}
          >
            If you'd like to talk about your fundraising needs, please get in
            touch.
          </Text>

          {/* Image / contact UI */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              marginTop: 40,
              width: "100%",
            }}
          >
            {/* Image Container */}
            <View
              style={{
                width: "100%",
                maxWidth: 500,
                aspectRatio: 1,
                backgroundColor: "#494949",
                borderRadius: 30,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("./assets/smiling2.png")}
                style={{ resizeMode: "cover", width: "100%", height: "100%" }}
              />
            </View>

            {/* Contact Form Container */}
            <View
              style={{
                width: "100%",
                maxWidth: 600,
                padding: 30,
                minHeight: 600,
                backgroundColor: "#f8f8f8",
                borderRadius: 30,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                Full Name
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 15,
                  height: 50,
                  width: "100%",
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}
              >
                <MaterialCommunityIcons
                  name="account-outline"
                  size={20}
                  color="#303030"
                />
                <TextInput
                  placeholder="Enter your name"
                  style={{
                    flex: 1,
                    height: "100%",
                    marginLeft: 10,
                    fontFamily: "Inter_400Regular",
                    fontSize: 14,
                    outlineStyle: "none",
                    color: "#888888",
                  }}
                />
              </View>

              <Text
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "Inter_600SemiBold",
                  marginTop: 20,
                }}
              >
                Email
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 15,
                  height: 50,
                  width: "100%",
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={20}
                  color="#303030"
                />
                <TextInput
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    height: "100%",
                    marginLeft: 10,
                    fontFamily: "Inter_400Regular",
                    fontSize: 14,
                    outlineStyle: "none",
                    color: "#888888",
                  }}
                />
              </View>

              <Text
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "Inter_600SemiBold",
                  marginTop: 20,
                }}
              >
                Message
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 15,
                  height: 150,
                  width: "100%",
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}
              >
                <TextInput
                  multiline={true}
                  placeholder="Enter your message"
                  style={{
                    flex: 1,
                    height: "100%",
                    fontFamily: "Inter_400Regular",
                    fontSize: 14,
                    outlineStyle: "none",
                    color: "#888888",
                    textAlignVertical: "top",
                    paddingTop: 15,
                  }}
                />
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#ff5252",
                  paddingHorizontal: 30,
                  paddingVertical: 20,
                  alignSelf: "flex-start",
                  marginTop: 40,
                  borderRadius: 99,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  shadowColor: "#ff5252",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    color: "#ffffff",
                    fontSize: 16,
                  }}
                >
                  Send message
                </Text>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={20}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
