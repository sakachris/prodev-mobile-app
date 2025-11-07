import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { styles } from "@/styles/_signin";
import { router } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* NAV */}
          <View style={styles.navGroup}>
            <Ionicons
              name="arrow-back"
              size={25}
              // onPress={() => router.back()}
              onPress={() => router.push("/")}
            />
            <Image source={HEROLOGOGREEN} />
          </View>

          {/* HEADINGS */}
          <Text style={styles.largeText}>Sign in to your</Text>
          <Text style={styles.largeText}>Account</Text>
          <Text style={styles.smallText}>
            Enter your email and password to sign in.
          </Text>

          {/* FORM */}
          <View style={styles.formGroup}>
            <View>
              <Text style={styles.placeholderText}>Email</Text>
              <TextInput
                keyboardType="email-address"
                style={styles.inputField}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.placeholderText}>Password</Text>
              <View style={styles.passwordGroup}>
                <TextInput style={{ flex: 1 }} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>

            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </View>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          {/* DIVIDER */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>

          {/* SOCIAL BUTTONS */}
          <View style={styles.socialMediaButtonGroup}>
            <TouchableOpacity style={styles.socialMediaButton}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image source={GOOGLELOGO} style={styles.iconSmall} />
                <Text style={styles.socialMediaButtonText}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialMediaButton}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image source={FACEBOOKLOGO} style={styles.iconSmall} />
                <Text style={styles.socialMediaButtonText}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* BOTTOM TEXT */}
          <View style={styles.subTextGroupFixed}>
            <Text style={styles.subText}>Don't have an account?</Text>
            <Text
              style={styles.subTextJoin}
              onPress={() => router.push("/join")}
            >
              {" "}
              Join now
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
