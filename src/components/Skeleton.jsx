import { Skeleton, Stack } from '@mui/material';

export const Loading = () => {
  return (
    <Stack
      justifyContent="space-evenly"
      gap={3}
      flexWrap="wrap"
      direction="row"
    >
      <Skeleton variant="rounded" width={300} height={140} />
      <Skeleton variant="rounded" width={300} height={140} />
      <Skeleton variant="rounded" width={300} height={140} />
      <Skeleton variant="rounded" width={300} height={140} />
      <Skeleton variant="rounded" width={300} height={140} />
      <Skeleton variant="rounded" width={300} height={140} />
    </Stack>
  );
};
