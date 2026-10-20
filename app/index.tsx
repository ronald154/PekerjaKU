import { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { getJobs } from '../services/jobService';
import JobCard from '../components/JobCard';

export default function Index() {
  const router = useRouter();

  // 1. Modul 2: useState untuk data dan pencarian
  const [jobsList, setJobsList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Modul 2: useEffect untuk memuat data awal
  useEffect(() => {
    const data = getJobs();
    setJobsList(data);
  }, []);

  // Filter pencarian real-time
  const filteredJobs = jobsList.filter((job) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = job.title ? job.title.toLowerCase().includes(query) : false;
    const categoryMatch = job.category ? job.category.toLowerCase().includes(query) : false;
    const locationMatch = job.location ? job.location.toLowerCase().includes(query) : false;
    return titleMatch || categoryMatch || locationMatch || searchQuery === '';
  });

  return (
    <ScrollView style={styles.container}>
      {/* Header Aplikasi */}
      <View style={styles.headerContainer}>
        <Text style={styles.appTitle}>PekerjaKu</Text>
        <Text style={styles.appSubtitle}>
          Temukan pekerjaan yang cocok untukmu
        </Text>
      </View>

      {/* Input Pencarian */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari pekerjaan atau kategori..."
          placeholderTextColor="#999999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Judul Daftar Pekerjaan */}
      <Text style={styles.sectionTitle}>Pekerjaan Tersedia</Text>

      {/* Daftar Pekerjaan */}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <TouchableOpacity
            key={job.id}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: '/detail',
                params: {
                  id: job.id,
                  title: job.title || job.nama || 'Pekerjaan',
                  category: job.category || job.kategori || 'PEKERJAAN',
                  description: job.description || job.deskripsi || 'Membuat dan menyelesaikan pekerjaan sesuai kebutuhan spesifikasi klien.',
                  location: job.location || job.lokasi || 'Online',
                  price: job.price || job.salary || job.harga || 'Rp 100.000',
                },
              })
            }
          >
            <JobCard job={job} />
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Belum Ada Pekerjaan</Text>
          <Text style={styles.emptyText}>
            {searchQuery
              ? 'Tidak ada pekerjaan yang sesuai dengan pencarianmu.'
              : 'Saat ini belum tersedia pekerjaan untuk ditampilkan.'}
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
    paddingBottom: 16,
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

  searchContainer: {
    marginBottom: 16,
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
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