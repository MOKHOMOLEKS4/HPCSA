import { TriangleAlert as AlertTriangle, Calendar, CircleCheck as CheckCircle, Clock, FileText, Plus, User } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const complaints = [
  {
    id: '1',
    title: 'Professional Misconduct',
    practitioner: 'Dr. John Doe',
    status: 'investigating',
    date: '2024-01-15',
    caseNumber: 'HPCSA-2024-001',
    description: 'Complaint regarding unprofessional conduct during patient consultation.',
  },
  {
    id: '2',
    title: 'Negligence',
    practitioner: 'Dr. Jane Smith',
    status: 'resolved',
    date: '2024-01-10',
    caseNumber: 'HPCSA-2024-002',
    description: 'Patient care standards not met during treatment procedure.',
  },
  {
    id: '3',
    title: 'Breach of Confidentiality',
    practitioner: 'Dr. Mike Johnson',
    status: 'pending',
    date: '2024-01-20',
    caseNumber: 'HPCSA-2024-003',
    description: 'Unauthorized disclosure of patient information to third parties.',
  },
];

export default function ComplaintsScreen() {
  const [showNewComplaintForm, setShowNewComplaintForm] = useState(false);
  const [newComplaint, setNewComplaint] = useState({
    practitioner: '',
    description: '',
    category: '',
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle size={20} color="#059669" />;
      case 'investigating':
        return <Clock size={20} color="#f59e0b" />;
      case 'pending':
        return <AlertTriangle size={20} color="#dc2626" />;
      default:
        return <FileText size={20} color="#6b7280" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return '#059669';
      case 'investigating':
        return '#f59e0b';
      case 'pending':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Complaints</Text>
        <Text style={styles.headerSubtitle}>File and track professional misconduct cases</Text>
      </View>

      {!showNewComplaintForm ? (
        <ScrollView style={styles.content}>
          {/* New Complaint Button */}
          <TouchableOpacity
            style={styles.newComplaintButton}
            onPress={() => setShowNewComplaintForm(true)}
          >
            <Plus size={24} color="#ffffff" />
            <Text style={styles.newComplaintButtonText}>File New Complaint</Text>
          </TouchableOpacity>

          {/* Complaints List */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Complaints</Text>
            {complaints.map((complaint) => (
              <View key={complaint.id} style={styles.complaintCard}>
                <View style={styles.complaintHeader}>
                  <Text style={styles.complaintTitle}>{complaint.title}</Text>
                  <View style={styles.statusContainer}>
                    {getStatusIcon(complaint.status)}
                    <Text style={[styles.statusText, { color: getStatusColor(complaint.status) }]}>
                      {complaint.status.toUpperCase()}
                    </Text>
                  </View>
                </View>

                <View style={styles.complaintInfo}>
                  <View style={styles.infoItem}>
                    <User size={16} color="#6b7280" />
                    <Text style={styles.infoText}>{complaint.practitioner}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Calendar size={16} color="#6b7280" />
                    <Text style={styles.infoText}>{complaint.date}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <FileText size={16} color="#6b7280" />
                    <Text style={styles.infoText}>{complaint.caseNumber}</Text>
                  </View>
                </View>

                <Text style={styles.complaintDescription}>
                  {complaint.description}
                </Text>

                <TouchableOpacity style={styles.viewDetailsButton}>
                  <Text style={styles.viewDetailsText}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.content}>
          {/* New Complaint Form */}
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>File New Complaint</Text>
              <TouchableOpacity onPress={() => setShowNewComplaintForm(false)}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formField}>
              <Text style={styles.fieldLabel}>Practitioner Name/Registration Number</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter practitioner details"
                value={newComplaint.practitioner}
                onChangeText={(text) => setNewComplaint({ ...newComplaint, practitioner: text })}
              />
            </View>

            <View style={styles.formField}>
              <Text style={styles.fieldLabel}>Complaint Category</Text>
              <View style={styles.categoryButtons}>
                {['Professional Misconduct', 'Negligence', 'Breach of Confidentiality', 'Other'].map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryButton,
                      newComplaint.category === category && styles.categoryButtonActive
                    ]}
                    onPress={() => setNewComplaint({ ...newComplaint, category })}
                  >
                    <Text style={[
                      styles.categoryButtonText,
                      newComplaint.category === category && styles.categoryButtonTextActive
                    ]}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.formField}>
              <Text style={styles.fieldLabel}>Complaint Description</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Provide detailed description of the complaint"
                multiline
                numberOfLines={6}
                value={newComplaint.description}
                onChangeText={(text) => setNewComplaint({ ...newComplaint, description: text })}
              />
            </View>

            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit Complaint</Text>
            </TouchableOpacity>

            <View style={styles.disclaimer}>
              <AlertTriangle size={16} color="#f59e0b" />
              <Text style={styles.disclaimerText}>
                All complaints are treated confidentially and investigated according to HPCSA procedures.
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
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
  content: {
    flex: 1,
    padding: 20,
  },
  newComplaintButton: {
    backgroundColor: '#dc2626',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  newComplaintButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  complaintCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  complaintHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  complaintTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
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
  complaintInfo: {
    marginBottom: 12,
    gap: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
  },
  complaintDescription: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
    lineHeight: 20,
  },
  viewDetailsButton: {
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    fontSize: 14,
    color: '#1e3a8a',
    fontWeight: '500',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  cancelButton: {
    fontSize: 16,
    color: '#6b7280',
  },
  formField: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#374151',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#374151',
    textAlignVertical: 'top',
    minHeight: 120,
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  categoryButtonActive: {
    backgroundColor: '#1e3a8a',
    borderColor: '#1e3a8a',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#6b7280',
  },
  categoryButtonTextActive: {
    color: '#ffffff',
  },
  submitButton: {
    backgroundColor: '#059669',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: '#fef3c7',
    borderRadius: 8,
  },
  disclaimerText: {
    fontSize: 12,
    color: '#92400e',
    marginLeft: 8,
    flex: 1,
    lineHeight: 16,
  },
});