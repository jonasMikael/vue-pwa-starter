import QrCodePage from '@/modules/menu/pages/qr-code/qr-code.vue';

export const MENU_ROUTES = Object.freeze({
    QrCodePage: 'qr-code',
});

export const menuRoutes = [
  {
    path: `${process.env.BASE_URL}qr-code`,

    component: () => import('@/layout/empty.layout.vue'),
    children: [
    ],
  },
];
