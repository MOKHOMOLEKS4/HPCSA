import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function DoctorRegisterScreen() {
  const [form, setForm] = useState({
    fullName: "",
    hpcsaNumber: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    const { fullName, hpcsaNumber, email, phone, password, confirmPassword } =
      form;

    // Basic validation
    if (
      !fullName ||
      !hpcsaNumber ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    // TODO: Send to backend API
    Alert.alert("Success", "Doctor registered successfully ✅");

    // Reset form
    setForm({
      fullName: "",
      hpcsaNumber: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Doctor Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={form.fullName}
        onChangeText={(text) => handleChange("fullName", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="HPCSA Number"
        value={form.hpcsaNumber}
        onChangeText={(text) => handleChange("hpcsaNumber", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => handleChange("phone", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(text) => handleChange("confirmPassword", text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0077b6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
