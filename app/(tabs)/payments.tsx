import { Banknote, Building, Clock, CreditCard, Landmark, ShieldCheck } from 'lucide-react-native';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PaymentStructurePage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>HPCSA Payments Structure</Text>

      {/* Section 1 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <CreditCard color="#1e88e5" size={22} />
          <Text style={styles.title}> Annual Fees / Registration Fees</Text>
        </View>
        <Text style={styles.text}>
          {"\u2022"} Practitioners must pay annual registration fees by <Text style={styles.bold}>1 April</Text> each year.{"\n"}
          {"\u2022"} Non-payment may result in suspension or removal from the register.
        </Text>
      </View>

      {/* Section 2 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Banknote color="#43a047" size={22} />
          <Text style={styles.title}> Payment Methods</Text>
        </View>
        <Text style={styles.text}>
          {"\u2022"} HPCSA Online Portal / Renewal Portal{"\n"}
          {"\u2022"} Direct deposit or EFT into HPCSA bank account{"\n"}
          {"\u2022"} Cash or email/fax card authorisations are not accepted
        </Text>
      </View>

      {/* Section 3 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Landmark color="#f9a825" size={22} />
          <Text style={styles.title}> Banking Details</Text>
        </View>
        <Text style={styles.text}>
          {"\u2022"} Bank: ABSA (Arcadia branch){"\n"}
          {"\u2022"} Different accounts for annual vs. other fees{"\n"}
          {"\u2022"} Use your HPCSA registration number as payment reference
        </Text>
      </View>

      {/* Section 4 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <ShieldCheck color="#6a1b9a" size={22} />
          <Text style={styles.title}> Prorated Fees & Exemptions</Text>
        </View>
        <Text style={styles.text}>
          {"\u2022"} First-time registrations after due date may be prorated{"\n"}
          {"\u2022"} Exemptions/refunds possible for:{"\n"}
          {"   \u2022"} Practitioners over 71{"\n"}
          {"   \u2022"} Ill health cases{"\n"}
          {"   \u2022"} Deceased practitioners (estate claims){"\n"}
          {"   \u2022"} Duplicate/over-payments
        </Text>
      </View>

      {/* Section 5 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Clock color="#ef6c00" size={22} />
          <Text style={styles.title}> Processing Timelines</Text>
        </View>
        <Text style={styles.text}>
          {"\u2022"} Payments reflect in about 3 days (EFT){"\n"}
          {"\u2022"} Direct ABSA payments faster{"\n"}
          {"\u2022"} Practising card available within ~48 hours after reflection
        </Text>
      </View>

      {/* Section 6 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Building color="#0288d1" size={22} />
          <Text style={styles.title}> Public Sector Deductions</Text>
        </View>
        <Text style={styles.text}>
          {"\u2022"} Public sector employees can pay via employer deduction (PERSAL){"\n"}
          {"\u2022"} HPCSA has agreements with Provincial Health Departments
        </Text>
      </View>

      {/* CTA */}
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.hpcsa.co.za')}> 
        <Text style={styles.buttonText}>Visit HPCSA Website</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1a237e',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  text: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});