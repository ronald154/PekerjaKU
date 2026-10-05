import { Text, View, StyleSheet } from 'react-native';
import { Job } from '../types/job'; // Import interface dari backend temanmu

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <View style={styles.card}>
      {/* Header: Kategori & Judul */}
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: getCategoryColor(job.category) }]}>
          <Text style={styles.badgeText}>{job.category}</Text>
        </View>
        <Text style={styles.title}>{job.title}</Text>
      </View>

      {/* Deskripsi Pekerjaan */}
      <Text style={styles.description} numberOfLines={2}>
        {job.description}
      </Text>

      {/* Footer: Lokasi & Harga */}
      <View style={styles.footer}>
        <Text style={styles.location}>📍 {job.location}</Text>
        <Text style={styles.price}>Rp {job.price.toLocaleString('id-ID')}</Text>
      </View>
    </View>
  );
}

// Custom Function: Warna Badge Dinamis Berdasarkan Kategori
const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'kebersihan': return '#4CAF50'; // Hijau
    case 'kurir': return '#FF9800';     // Oranye
    case 'desain': return '#9C27B0';    // Ungu
    case 'tenaga': return '#2196F3';    // Biru
    default: return '#9E9E9E';          // Abu-abu
  }
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flexShrink: 1,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 12,
  },
  location: {
    fontSize: 13,
    color: '#777',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007AFF',
  },
});