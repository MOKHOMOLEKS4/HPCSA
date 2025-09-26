import { FileText, Globe, Megaphone, Phone, UserCheck } from "lucide-react-native";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ClientDashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>HPCSA Client Dashboard</Text>
      <Text style={styles.subHeader}>Verify practitioners & access public services</Text>



      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Access</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.actionCard}>
          <UserCheck size={28} color="#0096FF" />
          <Text style={styles.actionText}>Check Status</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <FileText size={28} color="#FFD700" />
          <Text style={styles.actionText}>Guidelines</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Megaphone size={28} color="#FF6B6B" />
          <Text style={styles.actionText}>Announcements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Phone size={28} color="#4CAF50" />
          <Text style={styles.actionText}>Report Complaint</Text>
        </TouchableOpacity>
      </View>

      {/* Notice */}
      <View style={[styles.card, { backgroundColor: "#fff3cd" }]}>
        <Text style={styles.notice}>
          ⚠️ Only practitioners in good standing will appear in search results.
        </Text>
      </View>

      {/* CTA */}
      <TouchableOpacity style={styles.ctaButton}>
        <Globe size={24} color="#fff" />
        <Text style={styles.ctaText}>Visit HPCSA Website</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8f9fa" },
  header: { fontSize: 22, fontWeight: "bold", color: "#0077b6" },
  subHeader: { fontSize: 14, color: "#555", marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#0077b6",
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: { color: "#fff", fontWeight: "bold", marginLeft: 8 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  actionCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: { marginTop: 8, fontSize: 14, fontWeight: "500" },
  notice: { fontSize: 14, color: "#856404" },
  ctaButton: {
    flexDirection: "row",
    backgroundColor: "#0077b6",
    padding: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  ctaText: { color: "#fff", fontWeight: "bold", fontSize: 16, marginLeft: 8 },
});
