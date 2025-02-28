/// <reference types = "cypress" />

describe('AutomationExercise API Tests', () => {
    // const baseUrl = Cypress.env('base_url');
  const baseUrl = 'https://automationexercise.com/api';
  it('Get All Products List', () => {
    cy.request(`${baseUrl}/productsList`).then((response) => {
        expect(response.status).to.eq(200);

        const responseBody = JSON.parse(response.body);

        expect(responseBody).to.have.property('products').and.not.be.empty;

        responseBody.products.forEach(product => {
            expect(product).to.have.property('id').that.is.a('number');
            expect(product).to.have.property('name').that.is.a('string');
            expect(product).to.have.property('price').that.is.a('string');
            expect(product).to.have.property('brand').that.is.a('string');
        });
    });
});

it('POST To All Products List - Not Supported', () => {
    cy.request({
        method: 'POST',
        url: `${baseUrl}/productsList`,
        body: {
            name: 'Test Product',
            price: '10.99',
            category: 'Clothes'
        },
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        expect(response.status).to.eq(200); 

        const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

        expect(responseBody).to.have.property('responseCode', 405);
        expect(responseBody).to.have.property('message', 'This request method is not supported.');
    });
});

    it('Get All Brands List', () => {
        cy.request(`${baseUrl}/brandsList`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('brands').that.is.an('array').and.not.be.empty;
        });
    });

    it('PUT To All Brands List - Not Supported', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/brandsList`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(405);
            expect(response.body.message).to.include('This request method is not supported');
        });
    });

    it('POST To Verify Login with valid details', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/verifyLogin`,
            form: true,
            body: {
                email: 'test200@example.com',
                password: 'Test1234'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('User exists!');
        });
    });

    it('POST To Verify Login with invalid details', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/verifyLogin`,
            form: true,
            body: {
                email: 'invalid@example.com',
                password: 'wrongpassword'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.include('User not found!');
        });
    });

    it('POST To Verify Login without email parameter', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/verifyLogin`,
            form: true,
            body: {
                password: 'Test1234'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.message).to.include('Bad request, email or password parameter is missing in POST request.');
        });
    });

    it('DELETE To Verify Login - Not Supported', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/verifyLogin`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(405);
            expect(response.body.message).to.include('This request method is not supported');
        });
    });

    it('POST To Create/Register User Account', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/createAccount`,
            form: true,
            body: {
                name: 'Test User',
                email: 'Newuserr@example.com',
                password: 'testpassword',
                title: 'Mr',
                birth_date: '10',
                birth_month: '02',
                birth_year: '1999',
                firstname: 'Peter',
                lastname: 'Peterson',
                company: 'SomeCompany',
                address1: 'Test Street 123',
                address2: 'Test ap. 123',
                country: 'Krakochia',
                zipcode: '1234',
                state: 'Unknown',
                city: 'Some',
                mobile_number: '65486574874887'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.include('User created!');
        });
    });

    it('PUT METHOD To Update User Account', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/updateAccount`,
            form: true,
            body: {
                email: 'Newuserr@example.com',
                name: 'Updated User',
                password: 'newpassword',
                title: 'Mr',
                birth_date: '15',
                birth_month: '03',
                birth_year: '1995',
                firstname: 'Updated',
                lastname: 'User',
                company: 'UpdatedCompany',
                address1: 'Updated Street 456',
                address2: 'Updated ap. 789',
                country: 'UpdatedCountry',
                zipcode: '5678',
                state: 'UpdatedState',
                city: 'UpdatedCity',
                mobile_number: '9876543210'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.include('User updated!');
        });
    });

    it('GET User Account Detail by Email', () => {
        cy.request(`${baseUrl}/getUserDetailByEmail?email=Newuserr@example.com`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('user').that.is.an('object');
        });
    });

    it('DELETE User Account', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/deleteAccount`,
            form: true,
            body: {
                email: 'Newuserr@example.com',
                password: 'testpassword'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.include('Account deleted!');
        });
    });
});
