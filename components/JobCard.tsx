
import { Text, View, StyleSheet } from 'react-native';
import { Job } from '../types/job';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <View style={styles.card}>
      {/* Kategori */}
      <View
        style={[
          styles.badge,
          { backgroundColor: getCategoryColor(job.category) },
        ]}
      >
        <Text style={styles.badgeText}>{job.category}</Text>
      </View>

      {/* Judul Pekerjaan */}
      <Text style={styles.title}>{job.title}</Text>

      {/* Deskripsi Pekerjaan */}
      <Text style={styles.description} numberOfLines={2}>
        {job.description}
      </Text>

      {/* Lokasi & Harga */}
      <View style={styles.footer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.location}>{job.location}</Text>
        </View>

        <Text style={styles.price}>
          Rp {job.price.toLocaleString('id-ID')}
        </Text>
      </View>
    </View>
  );
}

// Menentukan warna badge berdasarkan kategori
const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'kebersihan':
      return '#4CAF50';
    case 'kurir':
      return '#FF9800';
    case 'desain':
      return '#9C27B0';
    case 'tenaga':
      return '#2196F3';
    default:
      return '#9E9E9E';
  }
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginBottom: 10,
  },

  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 7,
  },

  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 14,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 12,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },

  locationIcon: {
    fontSize: 13,
    marginRight: 4,
  },

  location: {
    fontSize: 13,
    color: '#777777',
    flexShrink: 1,
  },

  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#007AFF',
  },
});

