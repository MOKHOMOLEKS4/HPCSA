import { Picker } from "@react-native-picker/picker";
import { Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [role, setRole] = useState("patient");

  const handleLogin = () => {
    console.log("Role:", role, "Email:", email, "Password:", password);
    // Hook this to your backend (role can be sent to API)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HPCSA</Text>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Role Dropdown */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          onValueChange={(value) => setRole(value)}
          style={styles.picker}
        >
          <Picker.Item label="Patient / Client" value="patient" />
          <Picker.Item label="Practitioner" value="practitioner" />
        </Picker>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Mail size={20} color="#666" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Lock size={20} color="#666" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#888"
          secureTextEntry={secure}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          {secure ? <EyeOff size={20} color="#666" /> : <Eye size={20} color="#666" />}
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <TouchableOpacity>
        <Text style={styles.registerText}>
          Don’t have an account? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>

      {/* Guest link */}
      <TouchableOpacity>
        <Text style={styles.registerText}>
          Continue as Guest? <Text style={styles.registerLink}>Continue</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 32,
    textAlign: "center",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  registerText: {
    textAlign: "center",
    color: "#444",
  },
  registerLink: {
    color: '#1e3a8a',
    fontWeight: "600",
  },
});
