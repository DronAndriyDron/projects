import { Test } from '@nestjs/testing';
import { UserRole } from '../../authentication/enums/user-roles.enum';
import { User } from '../entities/user.entity';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';

describe('UsersController', () => {
  let usersController: UsersController;

  const mockUsersService = {
    create: jest.fn((dto) => {
      return new User();
    }),
    changePassword: jest.fn((dto) => {
      return true;
    }),
    changePinCode: jest.fn((dto) => {
      return true;
    }),
    findAll: jest.fn((dto) => {
      return {
        total: 9,
        data: [
          {
            id: 7,
            email: 'jmrrobotj@ukr.net',
            firstName: 'Bogdan',
            lastName: 'baluk',
            addressOne: 'adress',
            addressTwo: 'adress',
            postalCode: '2222',
            phoneNumber: '+38 (099) 2736713',
            isOTP: false,
            avatarImage: null,
            country: {
              id: 48,
              name: 'Romania',
            },
            city: {
              id: 5502,
              name: 'Ghimbav',
              stateName: 'Brasov',
              stateIsoCode: 'BV',
            },
            sendEmails: true,
            startDate: '2022-04-12T00:00:00.000Z',
            roles: [
              {
                name: 'procurement',
                title: 'Procurement',
              },
            ],
            organization: {
              id: 2,
              name: 'Coral DMOB',
              websiteUrl: '',
              type: 'provider',
              addressOne: '',
              addressTwo: '',
              postalCode: '',
              status: 'active',
            },
            lastSeen: null,
            status: 'Active',
          },
        ],
      };
    }),
    findOne: jest.fn((dto) => {
      return {
        id: 3,
        email: 'admin@coraldmob.com',
        firstName: 'Admin',
        lastName: 'Default',
        addressOne: '',
        addressTwo: '',
        postalCode: '',
        phoneNumber: '',
        isOTP: false,
        avatarImage: null,
        country: null,
        city: null,
        sendEmails: false,
        startDate: '2022-03-01T13:06:08.498Z',
        roles: [
          {
            name: 'admin',
            title: 'Administrator',
          },
        ],
        organization: {
          id: 2,
          name: 'Coral DMOB',
          websiteUrl: '',
          type: 'provider',
          addressOne: '',
          addressTwo: '',
          postalCode: '',
          status: 'active',
        },
        lastSeen: '2022-05-23T06:43:47.954Z',
        status: 'Active',
        projectCount: 2,
      };
    }),
    statistics: jest.fn((dto) => {
      return {
        ticketCount: 0,
        procurementCount: 0,
        warrantyTrackerCount: 1,
        chatCount: 0,
        projectChatCount: 0,
      };
    }),
    activate: jest.fn((dto) => {
      return true;
    }),
    deactivate: jest.fn((dto) => {
      return true;
    }),
    getUsersByOrganizationId: jest.fn((dto) => {
      return {
        total: 10,
        data: [
          {
            id: 5,
            email: 'tthorburn@accutech.ca',
            firstName: 'Oleg',
            lastName: 'kalushin',
            addressOne: 'adress',
            addressTwo: 'adress',
            postalCode: '2222',
            phoneNumber: '+38 (099) 2736713',
            isOTP: false,
            avatarImage: null,
            country: {
              id: 48,
              name: 'Romania',
            },
            city: {
              id: 119384,
              name: 'Sector 1',
              stateName: 'Bucuresti',
              stateIsoCode: 'B',
            },
            sendEmails: true,
            startDate: '2022-04-12T00:00:00.000Z',
            roles: [
              {
                name: 'technician',
                title: 'Technician',
              },
            ],
            organization: {
              id: 2,
              name: 'Coral DMOB',
              websiteUrl: '',
              type: 'provider',
              addressOne: '',
              addressTwo: '',
              postalCode: '',
              status: 'active',
            },
            lastSeen: null,
            status: 'Active',
          },
        ],
      };
    }),
  };
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  it('usersController should be defined', async () => {
    expect(usersController).toBeDefined();
  });

  it('usersController.create should be called', () => {
    usersController.create({
      email: 'jmrrobotj2@gmail.com',
      password: '1234',
      firstName: 'manger',
      lastName: 'doe',
      roleNames: [UserRole.projectManager],
      organizationId: 1,
      countryId: 48,
      cityId: 4968,
      addressOne: 'Ukraine',
      pinCode: '3456',
      addressTwo: 'USA',
      postalCode: '2087',
      phoneNumber: '380992736713',
      avatarImageId: 'id',
      startDate: new Date(),
    });
    expect(mockUsersService.create).toBeCalled();
  });
  it('usersController.create should return users object', () => {
    expect(
      usersController.create({
        email: 'jmrrobotj2@gmail.com',
        password: '1234',
        firstName: 'manger',
        lastName: 'doe',
        roleNames: [UserRole.projectManager],
        organizationId: 1,
        countryId: 48,
        cityId: 4968,
        addressOne: 'Ukraine',
        pinCode: '3456',
        addressTwo: 'USA',
        postalCode: '2087',
        phoneNumber: '380992736713',
        avatarImageId: 'id',
        startDate: new Date(),
      }),
    ).toEqual(new User());
  });
  it('usersController.changePassword should be called', () => {
    usersController.changePassword(
      {
        oldPassword: '1234',
        newPassword: '4567',
      },
      { user: 2 },
    );
    expect(mockUsersService.changePassword).toBeCalled();
  });
  it('usersController.changePassword should return true', () => {
    expect(
      usersController.changePassword(
        {
          oldPassword: '1234',
          newPassword: '4567',
        },
        { user: 2 },
      ),
    ).toEqual(true);
  });
  it('usersController.changePinCode should be called', () => {
    usersController.changePinCode({
      email: 'jmrrobotj@gmail.com',
      newPinCode: '234424',
    });
    expect(mockUsersService.changePinCode).toBeCalled();
  });
  it('usersController.changePinCode should return true', () => {
    expect(
      usersController.changePinCode({
        email: 'jmrrobotj@gmail.com',
        newPinCode: '234424',
      }),
    ).toEqual(true);
  });
  it('usersController.findAll should be called', () => {
    usersController.findAll(1, 2, 'order', '', '', { user: 2 });
    expect(mockUsersService.findAll).toBeCalled();
  });
  it('usersController.findAll should return array wuth user objects', () => {
    expect(usersController.findAll(1, 2, 'order', '', '', { user: 2 })).toEqual(
      {
        total: 10,
        data: [
          {
            id: expect.any(Number),
            email: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
            addressOne: expect.any(String),
            addressTwo: expect.any(String),
            postalCode: expect.any(String),
            phoneNumber: expect.any(String),
            isOTP: expect.any(Boolean),
            avatarImage: null,
            country: {
              id: expect.any(Number),
              name: expect.any(String),
            },
            city: {
              id: expect.any(Number),
              name: expect.any(String),
              stateName: expect.any(String),
              stateIsoCode: expect.any(String),
            },
            sendEmails: expect.any(Boolean),
            startDate: expect.any(String),
            roles: [
              {
                name: expect.any(String),
                title: expect.any(String),
              },
            ],
            organization: {
              id: expect.any(Number),
              name: expect.any(String),
              websiteUrl: expect.any(String),
              type: expect.any(String),
              addressOne: expect.any(String),
              addressTwo: expect.any(String),
              postalCode: expect.any(String),
              status: expect.any(String),
            },
            lastSeen: null,
            status: expect.any(String),
          },
        ],
      },
    );
  });
  it('usersController.me should be called', () => {
    usersController.me({ user: 2 });
    expect(mockUsersService.findOne).toBeCalled();
  });
  it('usersController.me should return user object', () => {
    expect(usersController.me({ user: 3 })).toEqual({
      id: expect.any(Number),
      email: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
      addressOne: expect.any(String),
      addressTwo: expect.any(String),
      postalCode: expect.any(String),
      phoneNumber: expect.any(String),
      isOTP: expect.any(Boolean),
      avatarImage: null,
      country: null,
      city: null,
      sendEmails: expect.any(Boolean),
      startDate: expect.any(String),
      roles: [
        {
          name: expect.any(String),
          title: expect.any(String),
        },
      ],
      organization: {
        id: 2,
        name: expect.any(String),
        websiteUrl: expect.any(String),
        type: expect.any(String),
        addressOne: expect.any(String),
        addressTwo: expect.any(String),
        postalCode: expect.any(String),
        status: expect.any(String),
      },
      lastSeen: expect.any(String),
      status: expect.any(String),
      projectCount: 2,
    });
  });
  it('usersController.statistics should be called', () => {
    usersController.statistics({ user: 2 }, 9);
    expect(mockUsersService.statistics).toBeCalled();
  });
  it('usersController.statistics should return statistics per user', () => {
    expect(usersController.statistics({ user: 3 }, 9)).toEqual({
      ticketCount: expect.any(Number),
      procurementCount: expect.any(Number),
      warrantyTrackerCount: expect.any(Number),
      chatCount: expect.any(Number),
      projectChatCount: expect.any(Number),
    });
  });
  it('usersController.findOne should be called', () => {
    usersController.findOne('4', { user: 2 });
    expect(mockUsersService.findOne).toBeCalled();
  });
  it('usersController.findOne should return user object', () => {
    expect(usersController.findOne('4', { user: 2 })).toEqual({
      id: expect.any(Number),
      email: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
      addressOne: expect.any(String),
      addressTwo: expect.any(String),
      postalCode: expect.any(String),
      phoneNumber: expect.any(String),
      isOTP: expect.any(Boolean),
      avatarImage: null,
      country: null,
      city: null,
      sendEmails: expect.any(Boolean),
      startDate: expect.any(String),
      roles: [
        {
          name: expect.any(String),
          title: expect.any(String),
        },
      ],
      organization: {
        id: 2,
        name: expect.any(String),
        websiteUrl: expect.any(String),
        type: expect.any(String),
        addressOne: expect.any(String),
        addressTwo: expect.any(String),
        postalCode: expect.any(String),
        status: expect.any(String),
      },
      lastSeen: expect.any(String),
      status: expect.any(String),
      projectCount: expect.any(Number),
    });
  });
  it('usersController.deactivate should be called', () => {
    usersController.deactivate('6', { user: 3 });
    expect(mockUsersService.deactivate).toBeCalled();
  });
  it('usersController.deactivate should return true', () => {
    expect(usersController.deactivate('6', { user: 3 })).toEqual(true);
  });
  it('usersController.activate should be called', () => {
    usersController.activate('6', { user: 3 });
    expect(mockUsersService.activate).toBeCalled();
  });
  it('usersController.activate should return true', () => {
    expect(usersController.activate('6', { user: 3 })).toEqual(true);
  });

  it('usersController.getUsersByOrganizationId should be called', () => {
    usersController.getUsersByOrganizationId(1, 2, '', '', '', 4);
    expect(mockUsersService.deactivate).toBeCalled();
  });
  it('usersController.getUsersByOrganizationId should return array with objects', () => {
    expect(
      usersController.getUsersByOrganizationId(1, 2, '', '', '', 4),
    ).toEqual({
      total: 10,
      data: [
        {
          id: expect.any(Number),
          email: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          addressOne: expect.any(String),
          addressTwo: expect.any(String),
          postalCode: expect.any(String),
          phoneNumber: expect.any(String),
          isOTP: expect.any(Boolean),
          avatarImage: null,
          country: {
            id: expect.any(Number),
            name: expect.any(String),
          },
          city: {
            id: expect.any(Number),
            name: expect.any(String),
            stateName: expect.any(String),
            stateIsoCode: expect.any(String),
          },
          sendEmails: expect.any(Boolean),
          startDate: expect.any(String),
          roles: [
            {
              name: expect.any(String),
              title: expect.any(String),
            },
          ],
          organization: {
            id: expect.any(Number),
            name: expect.any(String),
            websiteUrl: expect.any(String),
            type: expect.any(String),
            addressOne: expect.any(String),
            addressTwo: expect.any(String),
            postalCode: expect.any(String),
            status: expect.any(String),
          },
          lastSeen: null,
          status: expect.any(String),
        },
      ],
    });
  });
});
