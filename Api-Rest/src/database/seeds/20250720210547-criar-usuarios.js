import bcrypt from "bcryptjs";

export default {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Lazaro Luis',
        sobrenome: 'cuca',
        email: 'lazaro@example.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria Silva',
        sobrenome: 'cuinica',
        email: 'maria@example.com',
        password_hash: await bcrypt.hash('1256', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
