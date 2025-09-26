import { BookOpen, FileCheck, FileText, Phone, Shield, Users } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const quickActions = [
  {
    id: '1',
    title: 'Register Practitioner',
    subtitle: 'Apply for professional registration',
    icon: Users,
    color: '#1e3a8a',
  },
  {
    id: '2',
    title: 'Renew License',
    subtitle: 'Renew License ',
    icon: FileText,
    color: '#dc2626',
  },
  {
    id: '3',
    title: 'Verify Registration',
    subtitle: 'Check practitioner status',
    icon: FileCheck,
    color: '#059669',
  },
  {
    id: '4',
    title: 'Professional Standards',
    subtitle: 'View ethical guidelines',
    icon: BookOpen,
    color: '#7c3aed',
  },
];

const professionalBoards = [
  'Medical and Dental Professions Board',
  'Psychology Board',
  'Pharmacy Board',
  'Emergency Care Board',
  'Optometry and Dispensing Opticians Board',
  'Physiotherapy, Podiatry and Biokinetics Board',
  'Occupational Therapy Board',
  'Speech-Language Pathology and Audiology Board',
  'Radiography and Clinical Technology Board',
  'Nutrition and Dietetics Board',
  'Environmental Health Board',
  'Medical Technology Board',
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Shield size={32} color="#ffffff" />
          <Text style={styles.headerTitle}>HPCSA</Text>
        </View>
        <Text style={styles.headerSubtitle}>
          Health Professions Council of South Africa
        </Text>
        <Text style={styles.headerDescription}>
          Protecting the public through professional regulation
        </Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          {quickActions.map((action) => {
            const IconComponent = action.icon;
            return (
              <TouchableOpacity key={action.id} style={styles.actionCard}>
                <View style={[styles.actionIcon, { backgroundColor: `${action.color}15` }]}>
                  <IconComponent size={24} color={action.color} />
                </View>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Professional Boards */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Boards</Text>
        <View style={styles.boardsList}>
          {professionalBoards.map((board, index) => (
            <TouchableOpacity key={index} style={styles.boardItem}>
              <Text style={styles.boardText}>{board}</Text>
              <Text style={styles.boardArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <TouchableOpacity style={styles.contactCard}>
          <Phone size={20} color="#1e3a8a" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>General Enquiries</Text>
            <Text style={styles.contactDetails}>(+27) 12 338 9300</Text>
            <Text style={styles.contactDetails}>553 Madiba St, Arcadia, Pretoria, 0002</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Ensuring professional excellence in health care
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#1e3a8a',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 12,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#93c5fd',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    color: '#dbeafe',
    opacity: 0.9,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  boardsList: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  boardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  boardText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  boardArrow: {
    fontSize: 18,
    color: '#9ca3af',
  },
  contactCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactInfo: {
    marginLeft: 12,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  contactDetails: {
    fontSize: 14,
    color: '#6b7280',
  },
  footer: {
    padding: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9ca3af',
    fontStyle: 'italic',
  },
});