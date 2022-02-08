module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dccb774071c49e06da9f9ab3d1b6a530'),
  },
});
