import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { styles } from "@/styles/_join";
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

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Top Nav */}
          <View style={styles.iconsection}>
            <Ionicons
              name="arrow-back"
              size={25}
              onPress={() => router.push("/")}
            />
            <Image source={HEROLOGOGREEN} style={{ width: 55, height: 30 }} />
          </View>

          {/* Titles */}
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Create Your</Text>
            <Text style={styles.titleText}>Account</Text>
            <Text style={styles.subText}>
              Enter your details to create a new account.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formGroup}>
            {/* Email */}
            <View>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                // placeholder="Enter your email"
                keyboardType="email-address"
                style={styles.formControl}
              />
            </View>

            {/* Password */}
            <View>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput
                  //   placeholder="Enter your password"
                  secureTextEntry
                  style={styles.passwordControl}
                />
                <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
              </View>
            </View>

            {/* Confirm Password */}
            <View>
              <Text style={styles.formLabel}>Confirm Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput
                  //   placeholder="Re-enter password"
                  secureTextEntry
                  style={styles.passwordControl}
                />
                <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
              </View>
            </View>
          </View>

          {/* Create Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>

          {/* Social Buttons */}
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

          {/* Bottom Text */}
          <View style={styles.subTextGroupFixed}>
            <Text style={styles.subText}>Already have an account?</Text>
            <Text
              style={styles.subTextJoin}
              onPress={() => router.push("/signin")}
            >
              {" "}
              Sign in
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
