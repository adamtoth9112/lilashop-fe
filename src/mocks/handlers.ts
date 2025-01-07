import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/products', () => {
        return HttpResponse.json([
                { id: 1, name: 'Product 1', price: 10 },
                { id: 2, name: 'Product 2', price: 20 },
            ])
        }),
    http.get('/api/products/:id', ({ request }) => {
        const url = new URL(request.url);

        const pathParts = url.pathname.split('/');
        const productId = pathParts[pathParts.length - 1]; // Get the last part of the path

        if (productId) {
          return HttpResponse.json({
            id: productId,
            name: `Product ${productId}`,
            description: 'This is a mocked product description.',
          });
        } else {
          return HttpResponse.json(
            { error: 'Product ID is missing in the request' },
            { status: 400 }
          );
        }
    }),
];
