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
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const caseStudiesRef = useRef(null);
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
            <TouchableOpacity onPress={() => scrollToSection(introRef)}>
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

            <TouchableOpacity onPress={() => scrollToSection(caseStudiesRef)}>
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
        {/* INTRO SECTION */}
        <View
          ref={introRef}
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
              padding: 40,
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

              {/* Qualities */}

              <View
                style={{
                  gap: 60,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: 600,
                  maxHeight: 300,
                  marginTop: 60,
                }}
              >
                {/* Years experience */}

                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={{ fontSize: 40, fontFamily: "Inter_600Semibold" }}
                  >
                    15+
                  </Text>

                  <Text
                    style={{
                      color: "#9b9b9b",
                      fontSize: 20,
                      fontFamily: "Inter_400Regular",
                    }}
                  >
                    years experience
                  </Text>
                </View>

                {/* 7 figure partnerships */}

                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={{ fontSize: 40, fontFamily: "Inter_600Semibold" }}
                  >
                    Multiple 6 & 7{"\n"}figure
                  </Text>

                  <Text
                    style={{
                      color: "#9b9b9b",
                      fontSize: 20,
                      fontFamily: "Inter_400Regular",
                    }}
                  >
                    partnerships
                  </Text>
                </View>
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
              source={require("./assets/work7.png")}
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{
                  color: "#ff5252",
                  fontSize: 40,
                  fontFamily: "Inter_600SemiBold",
                }}
              >
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

            {/* Services Boxes Container */}
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

        {/* (CASE STUDIES)  CS SECTION */}

        <View
          ref={caseStudiesRef}
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
              paddingHorizontal: 0,
            }}
          >
            <Image
              source={require("./assets/work4.png")}
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{
                  color: "#ff5252",
                  marginTop: 40,
                  fontSize: 40,
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                Case studies
              </Text>
            </View>

            {/* Case studies boxes */}

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
              {/* Case study 1 */}

              <View
                style={{
                  borderRadius: 30,
                  width: 400,
                  height: 380,
                  maxWidth: "90%",
                  backgroundColor: "#ffffff",
                  padding: 30,

                  opacity: 0.8,

                  justifyContent: "space-between",

                  borderColor: "#e0e0e0",

                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#ff525215",
                    borderRadius: 10,
                    height: 25,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#ff5252",
                      fontSize: 12,
                      fontFamily: "Inter_600SemiBold",
                      letterSpacing: 0,
                      alignSelf: "center",
                    }}
                  >
                    CASE STUDY 1
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "Inter_600SemiBold",
                    marginTop: 20,
                    fontSize: 20,
                  }}
                >
                  Disability Charity
                </Text>

                <Text
                  style={{
                    color: "#6e6e6e",
                    fontFamily: "Inter_400Regular",
                    marginTop: 20,
                    fontSize: 15,
                  }}
                >
                  Turned a sensitive topic into a highly fundable statutory
                  proposal. I presented a clear, stratetgic, low-risk
                  investment.
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Inter_600SemiBold",
                    marginTop: 30,
                    color: "#929292",
                  }}
                >
                  OUTCOME
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontFamily: "Inter_600SemiBold",
                    color: "#fd3c3c",
                  }}
                >
                  £110K Grant Secured
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    fontFamily: "Inter_400Regular",
                    color: "#fd3c3cb0",
                  }}
                >
                  Increased and improved employability support for disabled
                  people.
                </Text>
              </View>

              {/* Case study 2 */}

              <View
                style={{
                  borderRadius: 30,
                  width: 400,
                  height: 380,
                  maxWidth: "90%",
                  backgroundColor: "#ffffff",
                  padding: 30,

                  opacity: 0.8,

                  borderColor: "#e0e0e0",

                  justifyContent: "space-between",

                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#ff525215",
                    borderRadius: 10,
                    height: 25,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#ff5252",
                      fontSize: 12,
                      fontFamily: "Inter_600SemiBold",
                      letterSpacing: 0,
                      alignSelf: "center",
                    }}
                  >
                    CASE STUDY 2
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "Inter_600SemiBold",
                    marginTop: 20,
                    fontSize: 20,
                  }}
                >
                  Womens and girls Charity
                </Text>

                <Text
                  style={{
                    color: "#6e6e6e",
                    fontFamily: "Inter_400Regular",
                    marginTop: 20,
                    fontSize: 15,
                  }}
                >
                  No investment in major gifts and grants income. Devised and
                  implemented a replicable bid development framework.
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Inter_600SemiBold",
                    marginTop: 30,
                    color: "#929292",
                  }}
                >
                  OUTCOME
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontFamily: "Inter_600SemiBold",
                    color: "#fd3c3c",
                  }}
                >
                  £1M Grant Secured
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    fontFamily: "Inter_400Regular",
                    color: "#fd3c3cb0",
                  }}
                >
                  More young girls and women accessing early, preventative
                  support
                </Text>
              </View>

              {/* Case study 3 */}

              <View
                style={{
                  borderRadius: 30,
                  width: 400,
                  height: 380,
                  maxWidth: "90%",
                  backgroundColor: "#ffffff",
                  padding: 30,

                  borderColor: "#e0e0e0",

                  opacity: 0.8,

                  justifyContent: "space-between",

                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#ff525215",
                    borderRadius: 10,
                    height: 25,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#ff5252",
                      fontSize: 12,
                      fontFamily: "Inter_600SemiBold",
                      letterSpacing: 0,
                      alignSelf: "center",
                    }}
                  >
                    CASE STUDY 3
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#000000",
                    fontFamily: "Inter_600SemiBold",
                    marginTop: 20,
                    fontSize: 20,
                  }}
                >
                  Youth work Chairty
                </Text>

                <Text
                  style={{
                    color: "#6e6e6e",
                    fontFamily: "Inter_400Regular",
                    marginTop: 20,
                    fontSize: 15,
                  }}
                >
                  Strong impact data but unclear proposals. I did a case for
                  support and central strategic input.{" "}
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Inter_600SemiBold",
                    marginTop: 30,
                    color: "#929292",
                  }}
                >
                  OUTCOME
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontFamily: "Inter_600SemiBold",
                    color: "#fd3c3c",
                  }}
                >
                  £225K Partnership Secured
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    fontFamily: "Inter_400Regular",
                    color: "#fd3c3cb0",
                  }}
                >
                  Consistent messaging across fundraising and marketing,
                  strengthening the charity’s brand and impact.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* CONTACT SECTION */}

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
              fontSize: 40,
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
                maxWidth: 600,
                minHeight: 600,
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
                onPress={() =>
                  alert("This feature is currently under development.")
                }
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
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  opacity: 0.9,
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
