import { CircleAlert as AlertCircle, CircleCheck as CheckCircle, Mail, MapPin, Phone, Search, User } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const practitioners = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    profession: 'Medical Practitioner',
    registrationNumber: 'MP123456',
    status: 'active',
    specialization: 'General Practice',
    location: 'Cape Town',
    phone: '021 555 0123',
    email: 's.johnson@example.com',
  },
  {
    id: '2',
    name: 'Dr. Michael Smith',
    profession: 'Psychologist',
    registrationNumber: 'PS789012',
    status: 'active',
    specialization: 'Clinical Psychology',
    location: 'Johannesburg',
    phone: '011 555 0456',
    email: 'm.smith@example.com',
  },
  {
    id: '3',
    name: 'Dr. Lisa Chen',
    profession: 'Pharmacist',
    registrationNumber: 'PH345678',
    status: 'suspended',
    specialization: 'Hospital Pharmacy',
    location: 'Durban',
    phone: '031 555 0789',
    email: 'l.chen@example.com',
  },
];

export default function PractitionersScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredPractitioners = practitioners.filter((practitioner) => {
    const matchesSearch =
      practitioner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practitioner.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practitioner.profession.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' || practitioner.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Practitioners</Text>
        <Text style={styles.headerSubtitle}>Search and verify registered health professionals</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#6b7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, registration number, or profession"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterButton, selectedFilter === 'all' && styles.filterButtonActive]}
            onPress={() => setSelectedFilter('all')}
          >
            <Text style={[styles.filterText, selectedFilter === 'all' && styles.filterTextActive]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, selectedFilter === 'active' && styles.filterButtonActive]}
            onPress={() => setSelectedFilter('active')}
          >
            <Text style={[styles.filterText, selectedFilter === 'active' && styles.filterTextActive]}>
              Active
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, selectedFilter === 'suspended' && styles.filterButtonActive]}
            onPress={() => setSelectedFilter('suspended')}
          >
            <Text style={[styles.filterText, selectedFilter === 'suspended' && styles.filterTextActive]}>
              Suspended
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Results */}
      <ScrollView style={styles.resultsContainer}>
        {filteredPractitioners.map((practitioner) => (
          <View key={practitioner.id} style={styles.practitionerCard}>
            <View style={styles.practitionerHeader}>
              <View style={styles.practitionerInfo}>
                <User size={24} color="#1e3a8a" />
                <View style={styles.practitionerDetails}>
                  <Text style={styles.practitionerName}>{practitioner.name}</Text>
                  <Text style={styles.practitionerProfession}>{practitioner.profession}</Text>
                </View>
              </View>
              <View style={styles.statusContainer}>
                {practitioner.status === 'active' ? (
                  <CheckCircle size={20} color="#059669" />
                ) : (
                  <AlertCircle size={20} color="#dc2626" />
                )}
                <Text style={[
                  styles.statusText,
                  practitioner.status === 'active' ? styles.statusActive : styles.statusSuspended
                ]}>
                  {practitioner.status.toUpperCase()}
                </Text>
              </View>
            </View>

            <View style={styles.practitionerMeta}>
              <Text style={styles.registrationNumber}>
                Registration: {practitioner.registrationNumber}
              </Text>
              <Text style={styles.specialization}>
                {practitioner.specialization}
              </Text>
            </View>

            <View style={styles.contactInfo}>
              <View style={styles.contactItem}>
                <MapPin size={16} color="#6b7280" />
                <Text style={styles.contactText}>{practitioner.location}</Text>
              </View>
              <View style={styles.contactItem}>
                <Phone size={16} color="#6b7280" />
                <Text style={styles.contactText}>{practitioner.phone}</Text>
              </View>
              <View style={styles.contactItem}>
                <Mail size={16} color="#6b7280" />
                <Text style={styles.contactText}>{practitioner.email}</Text>
              </View>
            </View>
          </View>
        ))}

        {filteredPractitioners.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No practitioners found</Text>
            <Text style={styles.emptyStateSubtext}>
              Try adjusting your search criteria
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
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
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#dbeafe',
  },
  searchSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#374151',
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  filterButtonActive: {
    backgroundColor: '#1e3a8a',
  },
  filterText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#ffffff',
  },
  resultsContainer: {
    flex: 1,
    padding: 20,
  },
  practitionerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  practitionerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  practitionerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  practitionerDetails: {
    marginLeft: 12,
    flex: 1,
  },
  practitionerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  practitionerProfession: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  statusActive: {
    color: '#059669',
  },
  statusSuspended: {
    color: '#dc2626',
  },
  practitionerMeta: {
    marginBottom: 12,
  },
  registrationNumber: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  specialization: {
    fontSize: 14,
    color: '#6b7280',
  },
  contactInfo: {
    gap: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#6b7280',
  },
});