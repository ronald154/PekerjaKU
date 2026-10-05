```tsx
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { getJobs } from '../services/jobService';
import JobCard from '../components/JobCard';

export default function Index() {
  const jobsList = getJobs();

  return (
    <ScrollView style={styles.container}>
      {/* Header Aplikasi */}
      <View style={styles.headerContainer}>
        <Text style={styles.appTitle}>PekerjaKu</Text>
        <Text style={styles.appSubtitle}>
          Temukan pekerjaan yang cocok untukmu
        </Text>
      </View>

      {/* Judul Daftar Pekerjaan */}
      <Text style={styles.sectionTitle}>Pekerjaan Tersedia</Text>

      {/* Daftar Pekerjaan */}
      {jobsList.length > 0 ? (
        jobsList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Belum Ada Pekerjaan</Text>
          <Text style={styles.emptyText}>
            Saat ini belum tersedia pekerjaan untuk ditampilkan.
          </Text>
        </View>
      )}

      {/* Footer */}
      <Text style={styles.footerText}>© 2026 PekerjaKu</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 16,
  },

  headerContainer: {
    paddingTop: 24,
    paddingBottom: 20,
  },

  appTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1A1A1A',
  },

  appSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 6,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 14,
  },

  emptyContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 6,
  },

  emptyText: {
    fontSize: 13,
    color: '#777777',
    textAlign: 'center',
  },

  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 20,
    marginBottom: 24,
  },
});
```
