import { createSpinner } from '@gluestack-ui/core/lib/esm/spinner/creator';
import { ActivityIndicator } from 'react-native';

export const Spinner = createSpinner({
  Root: ActivityIndicator,
});
