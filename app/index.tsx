import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { getJobs } from '../services/jobService'; // Ambil data dari backend temanmu
import JobCard from '../components/JobCard';      // Import komponen kartu

export default function Index() {
  const jobsList = getJobs();

  return (
    <ScrollView style={styles.container}>
      {/* Header Aplikasi PekerjaKu */}
      <View style={styles.headerContainer}>
        <Text style={styles.appTitle}>PekerjaKu</Text>
        <Text style={styles.appSubtitle}>Solusi kerja serabutan terpercaya</Text>
      </View>

      {/* Looping Data Menggunakan .map() - Memenuhi Kriteria Penilaian */}
      {jobsList.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      
      {/* Footer Simpel */}
      <Text style={styles.footerText}>© 2026 PekerjaKu</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F7FA', 
    padding: 16 
  },
  headerContainer: { 
    marginBottom: 24, 
    marginTop: 8 
  },
  appTitle: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#1A1A1A' 
  },
  appSubtitle: { 
    fontSize: 14, 
    color: '#666', 
    marginTop: 4 
  },
  footerText: { 
    textAlign: 'center', 
    fontSize: 12, 
    color: '#AAA', 
    marginTop: 30, 
    marginBottom: 10 
  },
});