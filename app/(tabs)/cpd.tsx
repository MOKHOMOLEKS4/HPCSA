import { BookOpen, Briefcase, ChevronDown, Heart, Shield } from "lucide-react-native";
import React, { useState } from "react";
import { FlatList, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// CPDPageNative.tsx
// React Native version of the CPD page

export default function CPDPageNative() {
  const [open, setOpen] = useState<string | null>(null);

  const functionalAreas = [
    { id: "business", title: "Business Practices", icon: <Briefcase size={20} color="#333" /> },
    { id: "ethics", title: "Ethics", icon: <Shield size={20} color="#333" /> },
    { id: "scope", title: "Scope of Professions & Practice", icon: <BookOpen size={20} color="#333" /> },
    { id: "health", title: "Health Impairments", icon: <Heart size={20} color="#333" /> },
    { id: "cpd", title: "Continuing Professional Development (CPD)", icon: <BookOpen size={20} color="#333" /> },
  ];

  const professionalBoards = [
    "Dental Therapy and Oral Hygiene",
    "Dietetics and Nutrition",
    "Emergency Care",
    "Environmental Health",
    "Medical Technology",
    "Medicine, Dentistry and Medical Science",
    "Occupational Therapy, Medical Orthotics & Prosthetics, Arts Therapy",
    "Optometry and Dispensing Opticians",
    "Physiotherapy, Podiatry and Biokinetics",
    "Psychology",
    "Radiography and Clinical Technology",
    "Speech, Language and Hearing",
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Continuing Professional Development (CPD)</Text>
        <Text style={styles.subtitle}>
          Implemented under section 26 of the Health Professions Act, 1974 (Act No. 56 of 1974).
          CPD is the responsibility of every registered health practitioner.
        </Text>
      </View>

      {/* Functional Areas */}
      <View style={styles.cardContainer}>
        {functionalAreas.map((area) => (
          <View key={area.id} style={styles.card}>
            <View style={styles.icon}>{area.icon}</View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{area.title}</Text>
              <Text style={styles.cardDesc}>
                {area.id === "cpd"
                  ? "Documentation, tracking and recognition of learning beyond initial training."
                  : "Part of the Professional Practice Division mandate."}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* What is CPD */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What is CPD?</Text>
        <Text style={styles.sectionText}>
          CPD is about documenting and tracking the skills, knowledge and experiences gained both formally and
          informally beyond initial training. Practitioners must earn Continuing Education Units (CEUs) within a
          12-month cycle, including clinical and ethics/human rights/health law components.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Approval</Text>
          <Text style={styles.infoText}>Most CPD activities should be approved before delivery to be recognised for CEUs.</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Compliance</Text>
          <Text style={styles.infoText}>Even if total CEUs exceed the threshold, falling short in either clinical or ethics/legal components results in non-compliance.</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL("https://hpcsaonline.custhelp.com/")}> 
          <Text style={styles.buttonText}>Check CPD Status</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlineButton} onPress={() => setOpen(open === "guidelines" ? null : "guidelines")}> 
          <Text style={styles.outlineButtonText}>View Guidelines</Text>
        </TouchableOpacity>
      </View>

      {/* Guidelines Collapsible */}
      {open === "guidelines" && (
        <View style={styles.section}>
          <View style={styles.guidelineHeader}>
            <Text style={styles.sectionTitle}>Revised CPD Guidelines & Practice</Text>
            <ChevronDown size={20} color="#333" style={{ transform: [{ rotate: "180deg" }] }} />
          </View>
          <Text style={styles.sectionText}>Important changes include:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• Discontinuation of sampling — all registered practitioners must ensure compliance. Non-compliance may lead to suspension.</Text>
            <Text style={styles.bullet}>• Online self-service platform for submissions and enquiries.</Text>
            <Text style={styles.bullet}>• Evidence from CPD Service Providers is integrated directly with HPCSA.</Text>
            <Text style={styles.bullet}>• Facilitators can submit attendance registers directly with accreditation letters.</Text>
            <Text style={styles.bullet}>• CPD certificates are no longer mandatory.</Text>
            <Text style={styles.bullet}>• CEU validity revised to 12 months (previously 24).</Text>
          </View>
        </View>
      )}

      {/* Professional Boards */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Boards</Text>
        <FlatList
          data={professionalBoards}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.bullet}>• {item}</Text>}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Implemented under section 26 of the Health Professions Act, 1974 (Act No. 56 of 1974).
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 16 },
  header: { marginBottom: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  subtitle: { marginTop: 4, fontSize: 14, color: "#4b5563" },
  cardContainer: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 20 },
  card: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 12, padding: 12, margin: 6, flex: 1, minWidth: "45%", elevation: 2 },
  icon: { marginRight: 8 },
  cardTitle: { fontSize: 14, fontWeight: "600", color: "#111827" },
  cardDesc: { fontSize: 12, color: "#6b7280", marginTop: 2 },
  section: { backgroundColor: "#fff", borderRadius: 12, padding: 16, marginBottom: 20, elevation: 2 },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  sectionText: { fontSize: 14, color: "#374151", marginBottom: 12 },
  infoBox: { borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 8, padding: 8, marginBottom: 8 },
  infoTitle: { fontSize: 14, fontWeight: "500" },
  infoText: { fontSize: 12, color: "#4b5563" },
  button: { backgroundColor: "#2563eb", padding: 12, borderRadius: 8, alignItems: "center", marginTop: 8 },
  buttonText: { color: "#fff", fontWeight: "600" },
  outlineButton: { borderWidth: 1, borderColor: "#d1d5db", padding: 12, borderRadius: 8, alignItems: "center", marginTop: 8 },
  outlineButtonText: { color: "#111827", fontWeight: "600" },
  guidelineHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  bulletList: { marginTop: 8 },
  bullet: { fontSize: 13, color: "#374151", marginBottom: 6 },
  footer: { marginTop: 20, alignItems: "center" },
  footerText: { fontSize: 12, color: "#6b7280", textAlign: "center" },
});
