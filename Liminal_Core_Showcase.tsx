// Connected Discord-GitHub: l.mrz | Roblox: loumarzzz00
// PRODUCTION SNIPPET: This file contains the Core UI Architecture of the Liminal Platform.
// Full project exceeds 1,400 lines; this extract demonstrates the responsive layout engine, 
// complex state handling for forms, and professional typography systems.

import { Inter_400Regular, Inter_600SemiBold, useFonts } from "@expo-google-fonts/inter";
import { PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display";
import { FontAwesome5, MaterialCommunityIcons } from "@expo-google-fonts/vector-icons";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { useRef, useState } from "react";
import Head from 'expo-router/head';

export default function About() {
  const { height, width } = useWindowDimensions();
  const scrollRef = useRef(null);
  const introRef = useRef(null);
  const contactRef = useRef(null);

  // Form Logic State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // API Integration Logic
  const handlePress = () => {
    fetch("https://formspree.io/f/mjgjdnrl", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setSent(true);
    });
  };

  const scrollToSection = (ref) => {
    if (scrollRef.current && ref.current) {
      ref.current.measureLayout(
        scrollRef.current.getInnerViewNode(),
        (x, y) => {
          scrollRef.current.scrollTo({ y: y - 100, animated: true });
        }
      );
    }
  };

  return (
    <>
      <Head>
        <title>Liminal | Consultancy</title>
      </Head>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView ref={scrollRef} stickyHeaderIndices={[0]}>
          
          {/* SECTION 1: RESPONSIVE HERO */}
          <View ref={introRef} style={{ paddingHorizontal: width > 1000 ? 100 : 20, paddingTop: 100, paddingBottom: 100 }}>
            <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: width > 800 ? 80 : 40, color: "#1a1a1a", lineHeight: width > 800 ? 90 : 50 }}>
              Defining the future of digital strategy.
            </Text>
            <View style={{ height: 2, width: 100, backgroundColor: "#f53b3b", marginTop: 40 }} />
            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 20, color: "#666", marginTop: 40, maxWidth: 600, lineHeight: 32 }}>
              We partner with forward-thinking enterprises to build resilient digital ecosystems that drive sustainable growth.
            </Text>
          </View>

          {/* SECTION 2: COMPLEX FORM LOGIC & UI */}
          <View ref={contactRef} style={{ backgroundColor: "#f9f9f9", paddingVertical: 120, paddingHorizontal: width > 1000 ? 100 : 20 }}>
            <View style={{ flexDirection: width > 1000 ? "row" : "column", gap: 60 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: "PlayfairDisplay_400Regular", fontSize: 48, color: "#1a1a1a" }}>Let's start a conversation.</Text>
                <Text style={{ fontFamily: "Inter_400Regular", fontSize: 18, color: "#666", marginTop: 20 }}>Ready to elevate your digital presence? Reach out to our consultancy team.</Text>
              </View>

              <View style={{ flex: 1.5, backgroundColor: "#ffffff", padding: 40, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.05, shadowRadius: 20 }}>
                <TextInput
                  placeholder="Your Name"
                  style={{ borderBottomWidth: 1, borderColor: focusedField === 'name' ? "#f53b3b" : "#ddd", paddingVertical: 15, marginBottom: 30, fontSize: 16 }}
                  onFocus={() => setFocusedField('name')}
                  onChangeText={setName}
                />
                <TextInput
                  placeholder="Email Address"
                  style={{ borderBottomWidth: 1, borderColor: focusedField === 'email' ? "#f53b3b" : "#ddd", paddingVertical: 15, marginBottom: 30, fontSize: 16 }}
                  onFocus={() => setFocusedField('email')}
                  onChangeText={setEmail}
                />
                <TextInput
                  placeholder="How can we help?"
                  multiline
                  style={{ borderBottomWidth: 1, borderColor: focusedField === 'message' ? "#f53b3b" : "#ddd", paddingVertical: 15, height: 100, fontSize: 16 }}
                  onFocus={() => setFocusedField('message')}
                  onChangeText={setMessage}
                />
                <TouchableOpacity 
                  onPress={handlePress}
                  style={{ backgroundColor: sent ? "#999" : "#f53b3b", padding: 20, borderRadius: 99, marginTop: 40, alignItems: "center" }}
                >
                  <Text style={{ color: "#fff", fontWeight: "600" }}>{sent ? "Message Sent" : "Send Message"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </>
  );
}
